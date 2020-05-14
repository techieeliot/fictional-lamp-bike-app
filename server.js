if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
const express = require('express')
const server = express();
const cors = require('cors');
server.use(cors());

const WB_API_KEY = process.env.WB_API_KEY
const PORT = 8080;
const axios = require('axios');

server.use(express.json())
server.use(express.static(__dirname));


const getCoordinates = (req) => {
  new Promise((resolve, reject) => {
    const lat = req.query.lat
    const lon = req.query.lon
    console.log(lat, lon);
     if(!lat) {
       reject(lat);
     } else resolve(lat && lon);
  });
}

server.get('/',  (req, res, next) => {
  const lat = req.query.lat
  const lon = req.query.lon
  let i = 0
  while (!lat && i < 9) {
    console.log(lat, lon);
    i++
  }
  console.log(lat, lon)
  const API_URL = `http://api.weatherbit.io/v2.0/forecast/daily?key=${WB_API_KEY}&days=8&units=I&lat=${lat}&lon=${lon}`
  axios.get(API_URL)
  .then(response => response.data)
  // .then(data => console.log(data))
  .then(data => res.send(data))
  .catch(err => console.log(err))
})

server.post('/weather', (req, res) => {

})
//Sign up
// server.post('/signup', createUser)

//Login
// server.post('/login', )

server.listen(PORT, err => {
  if (err) throw err
  console.log(`The Biker App server is listening on http://localhost:${PORT}!`)
});