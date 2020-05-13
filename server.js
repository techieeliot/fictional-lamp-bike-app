require('dotenv').config();
const express = require('express')
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
const PORT = 8080;
const API_KEY = process.env.API_KEY

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
  const API_URL = `http://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&days=8&units=I&lat=${lat}&lon=${lon}`
  axios.get(API_URL)
  .then(response => response.data)
  .then(data => console.log(data))
  // .then(data => res.send(data))
  .catch(err => console.log(err))
})

//Sign up
// server.post('/signup', createUser)

//Login
// server.post('/login', )

server.listen(PORT, err => {
  if (err) throw err
  console.log(`The Biker App server is listening on http://localhost:${PORT}!`)
});