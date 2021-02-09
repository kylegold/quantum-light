import React from "react"
// const v3 = require('node-hue-api').v3
// const LightState = v3.lightStates.LightState;

const ProgramStart = () => {
//   const LightingEffect = () => {
//     const USERNAME = 'po8cCSHyxja0eQYgD3fWz86fbZ5Wu2wWzvBDGt68',
//     // The name of the light we wish to retrieve by name
//     LIGHT_ID = [8,9,10]
//   ;
  
//   v3.discovery.nupnpSearch()
//     .then(searchResults => {
      
//       const host = searchResults[0].ipaddress;
//       console.log(host)
//       return v3.api.createLocal(host).connect(USERNAME);
//     })
//     .then(api => {
  
       
//       const randomLighting = () => { 
//         for (let i=0 ; i < LIGHT_ID.length ; i++){
//           let randomRed = Math.floor(Math.random() * 256)
//           let randomGreen = Math.floor(Math.random() * 256)
//           let randomBlue = Math.floor(Math.random() * 256)
//           let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
//           console.log(randomBrightness + "bright")
//             let state = new LightState()
//             .on()
//             .rgb(randomRed,randomGreen,randomBlue)
//             .brightness(randomBrightness)
//            console.log(LIGHT_ID[i])
//            api.lights.setLightState(LIGHT_ID[i], state);
//       }
    
//       }
//       const randomLighting2 = () => { 
//         for (let i=0 ; i < LIGHT_ID.length ; i++){
//         let randomRed = Math.floor(Math.random() * 256)
//         let randomGreen = Math.floor(Math.random() * 256)
//         let randomBlue = Math.floor(Math.random() * 256)
//         let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
//         console.log(randomBrightness + "bright")
//           let state = new LightState()
//           .on()
//           .rgb(randomRed,randomGreen,randomBlue)
//           .brightness(randomBrightness)
//          console.log(LIGHT_ID[i])
//          api.lights.setLightState(LIGHT_ID[i], state);
        
//       }
//     }
  
//       for (let j=0; j < 100; j++){setTimeout(function(){ randomLighting() }, 1000);
//       setTimeout(function(){ randomLighting2() }, 3000);}
      
  
      
      
    // })
  // }
  return (
    <div id="programStart">
      <button id="buttonStart" onClick={console.log("hello")}>PUSH ME</button>
    </div>
  )
}

export default ProgramStart