// const v3 = require('node-hue-api').v3
// // const LightState = v3.lightStates.LightState;

//   , discovery = v3.discovery
//   , hueApi = v3.api 
// ;

// const appName = 'node-hue-api';
// const deviceName = 'Goldish';

// async function discoverBridge() {
//   const discoveryResults = await discovery.nupnpSearch();

//   if (discoveryResults.length === 0) {
//     console.error('Failed to resolve any Hue Bridges');
//     return null;
//   } else {
//     // Ignoring that you could have more than one Hue Bridge on a network as this is unlikely in 99.9% of users situations
//     return discoveryResults[0].ipaddress;
//   }
// }

// async function discoverAndCreateUser() {
//   const ipAddress = await discoverBridge();

//   // Create an unauthenticated instance of the Hue API so that we can create a new user
//   const unauthenticatedApi = await hueApi.createLocal(ipAddress).connect();
  
//   let createdUser;
//   try {
//     createdUser = await unauthenticatedApi.users.createUser(appName, deviceName);
//     console.log('*******************************************************************************\n');
//     console.log('User has been created on the Hue Bridge. The following username can be used to\n' +
//                 'authenticate with the Bridge and provide full local access to the Hue Bridge.\n' +
//                 'YOU SHOULD TREAT THIS LIKE A PASSWORD\n');
//     console.log(`Hue Bridge User: ${createdUser.username}`);
//     console.log(`Hue Bridge User Client Key: ${createdUser.clientkey}`);
//     console.log('*******************************************************************************\n');

//     // Create a new API instance that is authenticated with the new user we created
//     const authenticatedApi = await hueApi.createLocal(ipAddress).connect(createdUser.username);

//     // Do something with the authenticated user/api
//     const bridgeConfig = await authenticatedApi.configuration.get();
//     console.log(`Connected to Hue Bridge: ${bridgeConfig.name} :: ${bridgeConfig.ipaddress}`);

//   } catch(err) {
//     if (err.getHueErrorType() === 101) {
//       console.error('The Link button on the bridge was not pressed. Please press the Link button and try again.');
//     } else {
//       console.error(`Unexpected Error: ${err.message}`);
//     }
//   }
// }

// // Invoke the discovery and create user code
// discoverAndCreateUser();

// const USERNAME = 'po8cCSHyxja0eQYgD3fWz86fbZ5Wu2wWzvBDGt68',
//   // The name of the light we wish to retrieve by name
//   LIGHT_ID = [8,9,10]
// ;

// v3.discovery.nupnpSearch()
//   .then(searchResults => {
    
//     const host = searchResults[0].ipaddress;
//     console.log(host)
//     return v3.api.createLocal(host).connect(USERNAME);
//   })
//   .then(api => {
//     // Using a LightState object to build the desired state
//     // console.log(api)
//     // let i=0;
//     //  let green = 55;
//     //  let blue = 55;
    
//     // let randomRed2 = Math.floor(Math.random() * 256)
//     // let randomGreen2 = Math.floor(Math.random() * 256)
//     // let randomBlue2 = Math.floor(Math.random() * 256)
//     // let randomBrightness2 = Math.floor(Math.random() * 101)
//     // let randomRed3 = Math.floor(Math.random() * 256)
//     // let randomGreen3 = Math.floor(Math.random() * 256)
//     // let randomBlue3 = Math.floor(Math.random() * 256)
//     // let randomBrightness3 = Math.floor(Math.random() * 101)
    
//     // console.log(LIGHT_ID[i])
//      let limit = 0;
//     const randomLighting = () => { 
//       for (let i=0 ; i < LIGHT_ID.length ; i++){
//         let randomRed = Math.floor(Math.random() * 256)
//       let randomGreen = Math.floor(Math.random() * 256)
//       let randomBlue = Math.floor(Math.random() * 256)
//       let randomBrightness = Math.floor(Math.random() * 101)
//       // red = red - 80;
//       // blue = blue + 0;
//       // green = green + 80;
//     //     let state = new LightState()
//     //     .on()
//     //     .rgb(randomRed,randomGreen,randomBlue)
//     //     .brightness(randomBrightness)
//     //     // limit += 1;
//     //    console.log(LIGHT_ID[i])
//     //    api.lights.setLightState(LIGHT_ID[i], state);
      
//     }
  
//     }
//     const randomLighting2 = () => { 
//       for (let i=0 ; i < LIGHT_ID.length ; i++){
//         let randomRed = Math.floor(Math.random() * 256)
//       let randomGreen = Math.floor(Math.random() * 256)
//       let randomBlue = Math.floor(Math.random() * 256)
//       let randomBrightness =  (60 -  Math.floor(Math.random() * 31))
//       // red = red - 80;
//       // blue = blue + 0;
//       // green = green + 80;
//       console.log(randomBrightness + "bright")
//         let state = new LightState()
//         .on()
//         .rgb(randomRed,randomGreen,randomBlue)
//         .brightness(randomBrightness).saturation(1)
//         limit += 1;
//        console.log(LIGHT_ID[i])
//        api.lights.setLightState(LIGHT_ID[i], state);
      
//     }
//   }
//     // randomLighting()
//     // randomLighting2()
//     for (let j=0; j < 100; j++){setTimeout(function(){ randomLighting() }, 1000);
//     setTimeout(function(){ randomLighting2() }, 3000);}
    
//     // }
    
    
//   })
// //        LIGHT_ID.forEach( bulb => {
// //       while (i !== 2) {
// //         i += 1
// //         let state = new LightState()
// //         .on()
// //         .rgb(randomRed,randomGreen,randomBlue)
// //         .brightness(randomBrightness)
// //       if(i === 0) {
        
// //         api.lights.setLightState(bulb, state);
// //       }
// //       else if(i===1){
// //         // let state = new LightState()
// //         // .on()
// //         // .rgb(randomRed2,randomGreen2,randomBlue2)
// //         // .brightness(randomBrightness2)
// //         state.rgb(0,randomGreen2,0)
// //         api.lights.setLightState(bulb, state);
// //       }
// //       else {
// //         // let state = new LightState()
// //         // .on()
// //         // .rgb(randomRed,randomGreen,randomBlue)
// //         // .brightness(randomBrightness)
// //         state.rgb(0,0,randomBlue)
// //         api.lights.setLightState(bulb, state);
// //       }
// //     }
// //     })
// //   })
      
      
      
    
      
    
//     //  })
       
//       // console.log(state)
      
