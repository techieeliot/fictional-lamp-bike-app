if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
const express = require('express')
const server = express();
const cors = require('cors');
server.use(cors());

const WB_API_KEY_A = process.env.WB_API_KEY_A
const WB_API_KEY_B = process.env.WB_API_KEY_B
const PORT = 9036;
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

server.get('/',  (req, res) => {
  const lat = req.query.lat
  const lon = req.query.lon
  let i = 0
  while (!lat && i < 9) {
    console.log(lat, lon);
    i++
  }
  console.log(lat, lon)
  const API_WEEK_URL = `http://api.weatherbit.io/v2.0/forecast/daily?key=${WB_API_KEY_A}&days=7&units=I&lat=${lat}&lon=${lon}`
  const API_SEVERE_URL = `https://api.weatherbit.io/v2.0/alerts?lat=${lat}&lon=${lon}&key=${WB_API_KEY_B}`
  axios.get(API_WEEK_URL)
  .then(response => response.data)
  // .then(data => console.log(data))
  .then(data => res.send(data))
  .catch(err => console.log(err))
})

server.post('/locationform', (req, res) => {
  console.log(req.body)
})

//Sign up
// server.post('/signup', createUser)

//Login
// server.post('/login', )

server.listen(PORT, err => {
  if (err) throw err
  console.log(`The Biker App server is listening on http://localhost:${PORT}!`)
});