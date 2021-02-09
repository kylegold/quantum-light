import React from "react"
import { ReactMic } from 'react-mic';

const ReactMicrophone = () => {
console.log(ReactMic.record)
  return (
    
      <div id="reactMicContainer">
        <ReactMic
          // record={this.state.record}
          className="sound-wave"
          // onStop={this.onStop}
          // onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button  type="button">Start</button>
        <button  type="button">Stop</button>
      </div>
    );
  }

export default ReactMicrophone