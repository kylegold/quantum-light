require("dotenv").config();
const v3 = require('node-hue-api').v3
const axios = require('axios')
const qrand = require('qrand');
const fs = require('fs')
const LightState = v3.lightStates.LightState;
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;
var sleep = require('sleep');
var seedrandom = require('seedrandom');

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
      setTimeout(() => {

      for (let i=0 ; i < LIGHT_ID.length ; i++){
      const lowBrightness =  10
      //const octets = null
        // const octo = qrand.getRandomHexOctets(16, function(err, seedQuantum) {
        //   if (err){throw err}
        //   else {
        //     // console.log(seedQuantum.join('') + " octet main");
        //     let fullSeedQuantum = seedQuantum.join('').toString();
        //     randomSeed = seedrandom(fullSeedQuantum);
        // counter = 1
        // ms_passed = 0
        // let randomIntervalTime = parseInt(randomSeed() * (100 - 0) + 0)
        //   for (let k = 0 ; k < 10000 ; k++) {
        //     setInterval(() => {
        //       const randomInterval = parseInt(randomSeed() * (1000 - 0) + 100) // min max - 20 2000
        //       if((k%2) - 1 === 0){
        //         strobeLighting(counter)
        //         // strobeLighting2()
  
        //         ms_passed = randomInterval*counter
        //         setTimeout(() => {strobeLighting(counter)}, ms_passed)
        //         counter += 1
               
        //       }
        //       else {
        //         strobeLighting2()
        //         setTimeout(() => {strobeLighting2()}, 2000)
        //       }
        //     }, randomIntervalTime)
           
            
        // }
      // });
      // const octo = qrand.getRandomHexOctets(16, function(seedQuantum, err) {
      //   if (err){throw err}
      //   else {
          // console.log(seedQuantum.join('') + " octets");
          // let fullSeedQuantum = seedQuantum.join('').toString();
          // randomSeed = seedrandom(fullSeedQuantum);
        
         
      
      let randomWarmth = parseInt(Math.random() * (500 - 153) + 153) // min max - 153 500
      let randomSaturation = parseInt(Math.random() * (100 - 0) + 0) // min max - 0 100
      let randomR1 = parseInt(Math.random() * (255 - 0) + 0) // min max - 0 255
      let randomB1 = parseInt(Math.random() * (255 - 0) + 0) // min max - 0 255
      let randomG1 = parseInt(Math.random() * (255 - 255) + 0) // min max - 0 255
      let randomTransitionTime = parseInt(Math.random() * (5000 - 0) + 0) // 1ms - 5000ms
      
      // let x = randomSeed() % (80 && 8)
      // let y = randomSeed() % (80 && 8)
      if (counter % 3 == 0){ //favor the blue every 9 sequence
        randomB1 = parseInt(Math.random() * (255 - 0) + 0) // min max - 0 255
        randomG1 = 0
        randomR1 = 0
        }

      if (counter % 7 == 0){ //sharp every 7 sequence
         randomTransitionTime = parseInt(Math.random() * (10 - 0) + 0) // 1ms - 5000ms
      }

      if (counter % 27 == 0){ //long every 27 sequence
         randomTransitionTime = parseInt(Math.random() * (10000 - 0) + 0) // 1ms - 5000ms
      }

      if (counter % 300 == 0){ //favor the red every 300 sequence
        randomR1 = parseInt(Math.random() * (255 - 128) + 128)  // min max - 0 255
     }

     if (counter % 9 == 0){ //favor the blue every 9 sequence
      randomB1 = parseInt(Math.random() * (255 - 128) + 128) // min max - 0 255
      }

      if (counter % 9 == 0){ //favor the blue every 9 sequence
        randomG1 = parseInt(Math.random() * (255 - 200) + 0) // min max - 0 255
        }

      const randomBri = parseInt(Math.random() * (100 - 50) + 50) // min max - 0 100


      const highBrightness = 100
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