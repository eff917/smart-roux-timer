import React from 'react';

import {
  connectToBluetoothDevice,
  startNotifications,
  disconnectFromBluetoothDevice
} from './helpers/bluetooth';
import { parseCube } from './helpers/cubeParser';
import './App.css';

import {renderCube, recolorCube} from './helpers/displayCube';
import { findBlock } from "./helpers/blockfinder";

const faceColorMap = ['g', 'y', 'r', 'w', 'o', 'b'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cubeState: 'bbbbbbbbboooooooooyyyyyyyyygggggggggrrrrrrrrrwwwwwwwww' };
    this.cubeRawState=[6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4];
    this.device = null;
    this.moves = [];
  }
  componentDidMount() {
    recolorCube(this.cubeRawState);
    renderCube();
  }
  componentWillUnmount() {
    disconnectFromBluetoothDevice(this.device);
  }
  
  render() {
    return (
      <div className="App">
        <div >
          <button
            onClick={async () => {
              const { server, device } = await connectToBluetoothDevice();
              this.device = device;
              const characteristic = await startNotifications(server);
              characteristic.addEventListener('characteristicvaluechanged', event => {
                const { value } = event.target; // 20 bytes sent by the cube
                const cubeRawState = parseCube(value);
                this.moves.push(cubeRawState);
                //console.log(cubeRawState);
                recolorCube(cubeRawState);
                renderCube();    
                const cubeState = parseCube(value) // We parse it to an array of 54 colors (1...6)
                  .map(faceletColor => faceColorMap[faceletColor - 1])
                  .join('');
                this.setState({ cubeState });
                //console.log(cubeState);
                let moveList = [];
                this.moves.forEach(move => {
                  moveList.push(move += "<br />");
                });
                //console.log(moveList);
                let blockFound = findBlock(cubeRawState);
                document.getElementById("moveCount").innerHTML = "<p>Moves: " + moveList.length + "</p><br />";
                document.getElementById("moveDisplay").innerHTML = "<p>" + moveList + "</p><br /><p> " + blockFound + "</p>" 
              });
              device.addEventListener('gattserverdisconnected', () => {
                disconnectFromBluetoothDevice(device);
              });
            }}
          >
            Connect cube
          </button>
          <button onClick={() => { 
            this.moves = [];
            let moveList = [];
            document.getElementById("moveCount").innerHTML = "<p>Moves: " + moveList.length + "</p><br />";
            document.getElementById("moveDisplay").innerHTML = "<p>" + moveList + "</p><br />" 

          }}
          >Reset</button>
          <div id="moveCount"></div>
          <div id="moveDisplay">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
