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
let randomSeed;

qrand.getRandomHexOctets(16, function(err, octets) {
  if (err) {throw err}
  else {
    console.log(octets.join('').toString());
    randomSeed = (octets.join('').toString())
  }
});

app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());

app.get('/', () => {
  
})

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})



const LightingEffect = () => {
  const USERNAME = 'po8cCSHyxja0eQYgD3fWz86fbZ5Wu2wWzvBDGt68',
  // The name of the light we wish to retrieve by name
  LIGHT_ID = [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
;

v3.discovery.nupnpSearch()
  .then(searchResults => {
    // const host = searchResults[0].ipaddress
    const host = "192.168.1.81";
    return v3.api.createLocal(host).connect(USERNAME);
  })
  .then(api => {
    
    let counter;
    const strobeLighting = () => { 
      setTimeout(() => {

      for (let i=0 ; i < LIGHT_ID.length ; i++){
      
      let randomWarmth = parseInt(randomSeed * (500 - 153) + 153) // min max - 153 500
      let randomSaturation = parseInt(randomSeed * (100 - 0) + 0) // min max - 0 100
      let randomR1 = parseInt(randomSeed * (255 - 0) + 0) // min max - 0 255
      let randomB1 = parseInt(randomSeed * (255 - 0) + 0) // min max - 0 255
      let randomG1 = parseInt(randomSeed * (255 - 255) + 0) // min max - 0 255
      let randomTransitionTime = parseInt(randomSeed * (5000 - 0) + 0) // 1ms - 5000ms
      
      // let x = randomSeed() % (80 && 8)
      // let y = randomSeed() % (80 && 8)
      if (counter % 3 == 0){ //favor the blue every 9 sequence
        randomB1 = parseInt(randomSeed * (255 - 0) + 0) // min max - 0 255
        randomG1 = 0
        randomR1 = 0
        }

      if (counter % 7 == 0){ //sharp every 7 sequence
         randomTransitionTime = parseInt(randomSeed * (10 - 0) + 0) // 1ms - 5000ms
      }

      if (counter % 27 == 0){ //long every 27 sequence
         randomTransitionTime = parseInt(randomSeed * (10000 - 0) + 0) // 1ms - 5000ms
      }

      if (counter % 300 == 0){ //favor the red every 300 sequence
        randomR1 = parseInt(randomSeed * (255 - 128) + 128)  // min max - 0 255
     }

     if (counter % 9 == 0){ //favor the blue every 9 sequence
      randomB1 = parseInt(randomSeed * (255 - 128) + 128) // min max - 0 255
      }

      if (counter % 9 == 0){ //favor the blue every 9 sequence
        randomG1 = parseInt(randomSeed * (255 - 200) + 0) // min max - 0 255
        }

      const randomBri = parseInt(randomSeed * (40 - 0) + 0) // min max - 0 100


          let state = new LightState()
        .on()
        .rgb(randomR1, randomG1, randomB1)
        .ct(randomWarmth)
        .sat(randomSaturation)
        .transition(randomTransitionTime)
        .brightness(randomBri)
        counter +=1 
      api.lights.setLightState(LIGHT_ID[i], state);
        // }
    // })
}
}, 2000)
    }
    setInterval(() => {
      // for (let k = 0 ; k < 10000 ; k++) {
        setTimeout(() => {strobeLighting()}, 2000)

        // strobeLighting()
  //  }
    }, 3000)
      
    })
}
LightingEffect()