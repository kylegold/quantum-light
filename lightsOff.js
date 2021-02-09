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

qrand.getRandomHexOctets(16, function(err, octets) {
  console.log(octets);
});
// console.log(seedrandom())
app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());

app.get('/', () => {
  
})

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})



const LightingEffect = () => {
  // let lightID
  const USERNAME = 'po8cCSHyxja0eQYgD3fWz86fbZ5Wu2wWzvBDGt68',
  // The name of the light we wish to retrieve by name
  LIGHT_ID = [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
;

v3.discovery.nupnpSearch()
  .then(searchResults => {
    
    const host = "192.168.1.81";
    // console.log(host)
    return v3.api.createLocal(host).connect(USERNAME);
  })
  .then(api => {
    // let randomSeed 
    let counter;
    const strobeLighting = () => { 
      
      for (let i=0 ; i < LIGHT_ID.length ; i++){
      
      const highBrightness = 100
          let state = new LightState()
        .on(false)
        counter +=1 
      api.lights.setLightState(LIGHT_ID[i], state);

}
    }
    strobeLighting()
    })
}
LightingEffect()