// // ------------- RANDOM LIGHTING API testing --------------- //
// // let randomSeed 
// //     const strobeLighting = (counter) => { 
// //       for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       const lowBrightness =  10
// //       //const octets = null
// //       const octo = qrand.getRandomHexOctets(16, function(err, seedQuantum) {
// //         if (err){throw err}
// //         else {
// //           // console.log(seedQuantum.join('') + " octets");
// //           let fullSeedQuantum = seedQuantum.join('').toString();
// //           randomSeed = seedrandom(fullSeedQuantum);
// //         // lightID = LIGHT_ID
         
      
// //       let randomWarmth = parseInt(randomSeed() * (500 - 153) + 153) // min max - 153 500
// //       let randomSaturation = parseInt(randomSeed() * (100 - 0) + 0) // min max - 0 100
// //       let randomR1 = parseInt(randomSeed() * (255 - 0) + 0) // min max - 0 255
// //       let randomB1 = parseInt(randomSeed() * (255 - 0) + 0) // min max - 0 255
// //       let randomG1 = parseInt(randomSeed() * (255 - 255) + 0) // min max - 0 255
// //       let randomTransitionTime = parseInt(randomSeed() * (10000 - 0) + 0) // 1ms - 5000ms
      
// //       let x = randomSeed()
// //       let y = randomSeed()
// //       if (counter % 7 == 0){ //sharp every 7 sequence
// //          randomTransitionTime = parseInt(randomSeed() * (10 - 0) + 0) // 1ms - 5000ms
// //       }

// //       if (counter % 27 == 0){ //long every 27 sequence
// //          randomTransitionTime = parseInt(randomSeed() * (10000 - 0) + 0) // 1ms - 5000ms
// //       }

// //       if (counter % 300 == 0){ //favor the red every 300 sequence
// //         randomR1 = parseInt(randomSeed() * (255 - 128) + 128)  // min max - 0 255
// //      }

// //      if (counter % 9 == 0){ //favor the blue every 9 sequence
// //       randomB1 = parseInt(randomSeed() * (255 - 128) + 128) // min max - 0 255
// //       }

// //       if (counter % 9 == 0){ //favor the blue every 9 sequence
// //         randomG1 = parseInt(randomSeed() * (255 - 200) + 0) // min max - 0 255
// //         }

// //       const randomBri = parseInt(randomSeed() * (100 - 40) + 40) // min max - 0 100


// //       const highBrightness = 100

//       // let data = {
//       //   "xy": [
//       //     0.8,
//       //     0.8
//       //   ],
//       //   "on": true,
//       //   "ct": 250,
//       //   "sat": 200,
//       //   "transitiontime": 10,
//       //   "bri": 250
//       // }

//       // axios.put('https://192.168.1.81/api/siRcRscjmoXByCdBGwY57LhAINe9PN7I/5gFetepAsLcYIbDT/lights/8/state/', data).then(function({ data }, err){
//       //   if (err) {
//       //     throw err
//       //   }
//       //   else {
//       //     console.log(data)
//       //   }
        
//       // })
     
//       //     let state = new LightState()
//       //   .on()
//       //   .rgb(randomR1, randomG1, randomB1)
//       //   .ct(randomWarmth)
//       //   .sat(randomSaturation)
//       //   .transition(randomTransitionTime)
//       //   .brightness(randomBri)
//       //  console.log(api.lights)
//       //  let lightColor = api.lights.setLightState(LIGHT_ID[i], state);
//       //  lightColor
//     //    fs.writeFile('Output.txt', lightColor.toString(), (err) => { 
      
//     //     // In case of a error throw err. 
//     //     if (err) throw err; 
//     // }) 
//       // }
//     // });
//     // })
        
  
//         // }

// // // ------------- RANDOM LIGHTING extend with like button for a state --------------- //
// let randomSeed 
//     const strobeLighting = (counter) => { 
//       for (let i=0 ; i < LIGHT_ID.length ; i++){
//       const lowBrightness =  10
//       //const octets = null
//       const octo = qrand.getRandomHexOctets(16, function(seedQuantum, err) {
//         if (err){throw err}
//         else {
//           // console.log(seedQuantum.join('') + " octets");
//           let fullSeedQuantum = seedQuantum.join('').toString();
//           randomSeed = seedrandom(fullSeedQuantum);
        
         
      
//       let randomWarmth = parseInt(randomSeed() * (500 - 153) + 153) // min max - 153 500
//       let randomSaturation = parseInt(randomSeed() * (100 - 0) + 0) // min max - 0 100
//       let randomR1 = parseInt(randomSeed() * (255 - 0) + 0) // min max - 0 255
//       let randomB1 = parseInt(randomSeed() * (255 - 0) + 0) // min max - 0 255
//       let randomG1 = parseInt(randomSeed() * (255 - 255) + 0) // min max - 0 255
//       let randomTransitionTime = parseInt(randomSeed() * (5000 - 0) + 0) // 1ms - 5000ms
      
//       // let x = randomSeed() % (80 && 8)
//       // let y = randomSeed() % (80 && 8)
//       if (counter % 7 == 0){ //sharp every 7 sequence
//          randomTransitionTime = parseInt(randomSeed() * (10 - 0) + 0) // 1ms - 5000ms
//       }

//       if (counter % 27 == 0){ //long every 27 sequence
//          randomTransitionTime = parseInt(randomSeed() * (10000 - 0) + 0) // 1ms - 5000ms
//       }

//       if (counter % 300 == 0){ //favor the red every 300 sequence
//         randomR1 = parseInt(randomSeed() * (255 - 128) + 128)  // min max - 0 255
//      }

//      if (counter % 9 == 0){ //favor the blue every 9 sequence
//       randomB1 = parseInt(randomSeed() * (255 - 128) + 128) // min max - 0 255
//       }

//       if (counter % 9 == 0){ //favor the blue every 9 sequence
//         randomG1 = parseInt(randomSeed() * (255 - 200) + 0) // min max - 0 255
//         }

//       const randomBri = parseInt(randomSeed() * (100 - 40) + 40) // min max - 0 100


//       const highBrightness = 100
//           let state = new LightState()
//         .on()
//         .rgb(randomR1, randomG1, randomB1)
//         .ct(randomWarmth)
//         .sat(randomSaturation)
//         .transition(randomTransitionTime)
//         .brightness(randomBri)
//       //  console.log(api.lights)
//       api.lights.setLightState(LIGHT_ID[i], state);
       
//     //    fs.writeFile('Output.txt', lightColor.toString(), (err) => { 
      
//     //     // In case of a error throw err. 
//     //     if (err) throw err; 
//     // }) 
//         }
//     });
//     }  
//         }
//         strobeLighting()
//       // })
//     // }
//     LightingEffect()
    
// // -------------------------------------------------------- //
        
//         //   const strobeLighting2 = () => { 
//         //   for (let i=0 ; i < LIGHT_ID.length ; i++){
//         //   const lowBrightness =  10
//         //   const highBrightness = 100
//         //       let state = new LightState()
//         //       .on()
//         //       .rgb(randomR1,randomB1,randomG1)
//         //       .ct(randomWarmth)
//         //       .sat(randomSaturation)
//         //       .transition(randomTransitionTime)
//         //       .brightness(randomBri)
//         //   // console.log(LIGHT_ID[i])
//         //   api.lights.setLightState(LIGHT_ID[i], state);
//         //   }
//         // }
//         // const strobeLighting3 = () => { 
//         //   for (let i=0 ; i < LIGHT_ID.length ; i++){
//         //   const lowBrightness =  10
//         //   const highBrightness = 100
//         //       let state = new LightState()
//         //       .on()
//         //       .rgb(randomR1,randomB1,randomG1)
//         //       .ct(randomWarmth)
//         //       .sat(randomSaturation)
//         //       .transition(randomTransitionTime)
//         //       .brightness(randomBri)
//         //   //  console.log(LIGHT_ID[i])
//         //    api.lights.setLightState(LIGHT_ID[i], state);
//         //   }
//         // }
        



//         // const octo = qrand.getRandomHexOctets(16, function(err, seedQuantum) {
//         //   if (err){throw err}
//         //   else {
//         //     // console.log(seedQuantum.join('') + " octet main");
//         //     let fullSeedQuantum = seedQuantum.join('').toString();
//         //     randomSeed = seedrandom(fullSeedQuantum);
//         // counter = 1
//         // ms_passed = 0
//         // let randomIntervalTime = parseInt(randomSeed() * (100 - 0) + 0)
//         //   for (let k = 0 ; k < 10000 ; k++) {
//         //     setInterval(() => {
//         //       const randomInterval = parseInt(randomSeed() * (1000 - 0) + 100) // min max - 20 2000
//         //       if((k%2) - 1 === 0){
//         //         strobeLighting(counter)
//         //         // strobeLighting2()
  
//         //         ms_passed = randomInterval*counter
//         //         setTimeout(() => {strobeLighting(counter)}, ms_passed)
//         //         counter += 1
               
//         //       }
//         //       else {
//         //         strobeLighting2()
//         //         setTimeout(() => {strobeLighting2()}, 2000)
//         //       }
//         //     }, randomIntervalTime)
           
            
//         // }
//       // });
//               // }
//             // })
  
// // }

  
    
//         // LightingEffect()


// // ------------- DISCO LIGHTING --------------- //

//   //   const discoLighting = () => { 
//   //     for (let i=0 ; i < LIGHT_ID.length ; i++){
//   //       let randomRed = Math.floor(Math.random() * 256)
//   //     let randomGreen = Math.floor(Math.random() * 256)
//   //     let randomBlue = Math.floor(Math.random() * 256)
//   //     let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
//   //     console.log(randomBrightness + "bright")
//   //       let state = new LightState()
//   //       .on()
//   //       .rgb(randomRed,randomGreen,randomBlue)
//   //       .brightness(randomBrightness)
//   //      console.log(LIGHT_ID[i])
//   //      api.lights.setLightState(LIGHT_ID[i], state);
      
//   //   }
//   // }
//   //   const discoLighting2 = () => { 
//   //     for (let i=0 ; i < LIGHT_ID.length ; i++){
//   //       let randomRed = Math.floor(Math.random() * 256)
//   //     let randomGreen = Math.floor(Math.random() * 256)
//   //     let randomBlue = Math.floor(Math.random() * 256)
//   //     let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
//   //     console.log(randomBrightness + "bright")
//   //       let state = new LightState()
//   //       .on()
//   //       .rgb(randomRed,randomGreen,randomBlue)
//   //       .brightness(randomBrightness)
        
//   //      console.log(LIGHT_ID[i])
//   //      api.lights.setLightState(LIGHT_ID[i], state);
      
//   //   }
//   // }
// // ------------- COLOR LIGHTING --------------- //

// // ------------- RED_BLUE LIGHTING --------------- //
//   //   const randomLighting = () => { 
//   //     for (let i=0 ; i < LIGHT_ID.length ; i++){
//   //       let randomRed = Math.floor(Math.random() * 256)
//   //     let randomGreen = Math.floor(Math.random() * 256)
//   //     let randomBlue = Math.floor(Math.random() * 126)
//   //     let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
//   //     console.log(randomBrightness + "bright")
//   //       let state = new LightState()
//   //       .on()
//   //       .rgb(randomRed,0,randomBlue)
//   //       .brightness(randomBrightness)
//   //      console.log(LIGHT_ID[i])
//   //      api.lights.setLightState(LIGHT_ID[i], state);
      
//   //   }
//   // }

//   //   const randomLighting2 = () => { 
//   //     for (let i=0 ; i < LIGHT_ID.length ; i++){
//   //       let randomRed = Math.floor(Math.random() * 256)
//   //     let randomGreen = Math.floor(Math.random() * 256)
//   //     let randomBlue = Math.floor(Math.random() * 256)
//   //     let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
//   //     console.log(randomBrightness + "bright")
//   //       let state = new LightState()
//   //       .on()
//   //       .rgb(randomRed,0,randomBlue)
//   //       .brightness(randomBrightness)
        
//   //      console.log(LIGHT_ID[i])
//   //      api.lights.setLightState(LIGHT_ID[i], state);
      
//   //   }
//   // }

// // ------------- RED_GREEN LIGHTING --------------- //

// //   const randomLighting3 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let randomRed = Math.floor(Math.random() * 256)
// //     let randomGreen = Math.floor(Math.random() * 126)
// //     let randomBlue = Math.floor(Math.random() * 256)
// //     let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
// //     console.log(randomBrightness + "bright")
// //       let state = new LightState()
// //       .on()
// //       .rgb(randomRed,randomGreen,0)
// //       .brightness(randomBrightness)
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //   }
// // }

// //   const randomLighting4 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let randomRed = Math.floor(Math.random() * 256)
// //     let randomGreen = Math.floor(Math.random() * 256)
// //     let randomBlue = Math.floor(Math.random() * 256)
// //     let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
// //     console.log(randomBrightness + "bright")
// //       let state = new LightState()
// //       .on()
// //       .rgb(randomRed,0,randomBlue)
// //       .brightness(randomBrightness)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //   }
// // }

// // ------------- GREEN_BLUE LIGHTING --------------- //

// // const randomLighting5 = () => { 
// //   for (let i=0 ; i < LIGHT_ID.length ; i++){
// //     let randomRed = Math.floor(Math.random() * 256)
// //   let randomGreen = Math.floor(Math.random() * 126)
// //   let randomBlue = Math.floor(Math.random() * 256)
// //   let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
// //   console.log(randomBrightness + "bright")
// //     let state = new LightState()
// //     .on()
// //     .rgb(0,randomGreen,randomBlue)
// //     .brightness(randomBrightness)
// //    console.log(LIGHT_ID[i])
// //    api.lights.setLightState(LIGHT_ID[i], state);
  
// // }
// // }

// // const randomLighting6 = () => { 
// //   for (let i=0 ; i < LIGHT_ID.length ; i++){
// //     let randomRed = Math.floor(Math.random() * 256)
// //   let randomGreen = Math.floor(Math.random() * 256)
// //   let randomBlue = Math.floor(Math.random() * 256)
// //   let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
// //   console.log(randomBrightness + "bright")
// //     let state = new LightState()
// //     .on()
// //     .rgb(0,randomGreen,randomBlue)
// //     .brightness(randomBrightness)
    
// //    console.log(LIGHT_ID[i])
// //    api.lights.setLightState(LIGHT_ID[i], state);
  
// // }
// // }

// // ------------- FADING TWO_COLOR LIGHTING --------------- //

// // const redBlue = () => {

// //       for (let j=0; j < 100; j++){
// //         setTimeout(function(){ randomLighting() }, 3000);
// //       setTimeout(function(){ randomLighting2() }, 7000);
    
// //     }
// // }
// // const redGreen = () => {

// //   for (let j=0; j < 100; j++){
// //     setTimeout(function(){ randomLighting3() }, 3000);
// //   setTimeout(function(){ randomLighting4() }, 7000);

// // }
// // }
// // const greenBlue = () => {

// //   for (let j=0; j < 100; j++){
// //     setTimeout(function(){ randomLighting5() }, 3000);
// //   setTimeout(function(){ randomLighting6() }, 7000);

// // }
// // }
// // const redLighting = () => { 
// //       for (let i=0 ; i < LIGHT_ID.length ; i++){
// //         let state = new LightState()
// //         .on()
// //         .rgb(255,0,0)
// //         .brightness(50)
        
// //        console.log(LIGHT_ID[i])
// //        api.lights.setLightState(LIGHT_ID[i], state);
      
// //     }
// //   }
// //   const redLighting2 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(220,0,0)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //   }
// //   }
// //   const redLighting3 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(180,0,0)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //   }
// //   }
// //   const redLighting4 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(150,0,0)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //   }
// //   }
// //   const redLighting5 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(120,0,0)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //   }
// //   }
// //   const redLighting6 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(80,0,0)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //   }
// //   }
// //   const redLighting7 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(50,0,0)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //   }
// //   }
// //   const redLighting8 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(20,0,10)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //   }
// //   }
// //   const blueLighting = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(0,0,255)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //   }
// //   }
// //   const blueLighting2 = () => { 
// //   for (let i=0 ; i < LIGHT_ID.length ; i++){
// //     let state = new LightState()
// //     .on()
// //     .rgb(0,0,220)
// //     .brightness(50)
    
// //    console.log(LIGHT_ID[i])
// //    api.lights.setLightState(LIGHT_ID[i], state);
  
// //   }
// //   }
// //   const blueLighting3 = () => { 
// //   for (let i=0 ; i < LIGHT_ID.length ; i++){
// //     let state = new LightState()
// //     .on()
// //     .rgb(0,0,180)
// //     .brightness(50)
    
// //    console.log(LIGHT_ID[i])
// //    api.lights.setLightState(LIGHT_ID[i], state);
  
// //   }
// //   }
// //   const blueLighting4 = () => { 
// //   for (let i=0 ; i < LIGHT_ID.length ; i++){
// //     let state = new LightState()
// //     .on()
// //     .rgb(0,0,160)
// //     .brightness(50)
    
// //    console.log(LIGHT_ID[i])
// //    api.lights.setLightState(LIGHT_ID[i], state);
  
// //   }
// //   }
// //   const blueLighting5 = () => { 
// //   for (let i=0 ; i < LIGHT_ID.length ; i++){
// //     let state = new LightState()
// //     .on()
// //     .rgb(0,0,120)
// //     .brightness(50)
    
// //    console.log(LIGHT_ID[i])
// //    api.lights.setLightState(LIGHT_ID[i], state);
  
// //   }
// //   }
// //   const blueLighting6 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(0,0,80)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //     }
// //     }
// //     const blueLighting7 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(0,0,50)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //     }
// //     }
// //     const blueLighting8 = () => { 
// //     for (let i=0 ; i < LIGHT_ID.length ; i++){
// //       let state = new LightState()
// //       .on()
// //       .rgb(0,0,20)
// //       .brightness(50)
      
// //      console.log(LIGHT_ID[i])
// //      api.lights.setLightState(LIGHT_ID[i], state);
    
// //     }
// //     }
//   //   const wvLighting = () => { 
//   //     let x=0;
//   //     let y=0;
//   // //  while(x<0 && y<0) {
    
//   //   for (let j=0 ; j < 1000 ; j++){
//   //     setTimeout(() => {
//   //       const randomNum = Math.random().toFixed(4)

//   //       const randomNum2 = Math.random().toFixed(4)
//   //     for (let i=0 ; i < LIGHT_ID.length ; i++){
//   //          let state = new LightState()
//   //       .on()
//   //       // .rgb(255,0,0)
//   //       .brightness(randomBrightnes)
//   //       .xy(randomNum, randomNum2)

//   //       x += .0001
//   //       y += .0001
//   //       console.log(randomNum, randomNum2)
//   //       // }
      
       
        
//   //      console.log(LIGHT_ID[i])
//   //      api.lights.setLightState(LIGHT_ID[i], state);
      
//   //     }
//   //   }, 500)
//   //   }
    
//   //     }
// // for (let k = 0 ; k < 100 ; k++) {
//   // redLighting()
//   // redLighting2()
//   // redLighting3()
//   // redLighting4()
//   // redLighting5()
//   // redLighting6()
//   // redLighting7()
//   // redLighting8()
//   // blueLighting8()
//   // blueLighting7()
//   // blueLighting6()
//   // blueLighting5()
//   // blueLighting4()
//   // blueLighting3()
//   // blueLighting2()
//   // blueLighting()
//   // blueLighting()
//   // blueLighting2()
//   // blueLighting3()
//   // blueLighting4()
//   // blueLighting5()
//   // blueLighting6()
//   // blueLighting7()
//   // blueLighting8()
//   // redLighting8()
//   // redLighting7()
//   // redLighting6()
//   // redLighting5()
//   // redLighting4()
//   // redLighting3()
//   // redLighting2()
//   // redLighting()
//   // wvLighting()
// // }


// // redBlue()
// // redGreen()
// // greenBlue()
    
// // for (let k = 0 ; k < 100 ; k++) {
// // setTimeout(() => {discoLighting()}, 3000)
// // setTimeout(() => {discoLighting()}, 7000)
// // discoLighting()
// // discoLighting2()
// //   }
// // })
// // }
// // LightingEffect()
// // strobeLighting()
// // }) 
