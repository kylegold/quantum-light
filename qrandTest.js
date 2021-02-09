require("dotenv").config();
const v3 = require('node-hue-api').v3
const axios = require('axios')
var qrand = require('qrand');
const fs = require('fs')
const LightState = v3.lightStates.LightState;
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;
var sleep = require('sleep');
var seedrandom = require('seedrandom');
var rng = seedrandom('hello.');
rng = seedrandom('added entropy.', { entropy: true });

qrand.getRandomHexOctets(16, function(err, octets) {
  console.log(octets.join('').toString());
});
// console.log(seedrandom())
app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());

app.get('/', () => {
  
})

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})

