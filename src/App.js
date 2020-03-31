import React from 'react';

import {
  connectToBluetoothDevice,
  startNotifications,
  disconnectFromBluetoothDevice
} from './helpers/bluetooth';
import { parseCube } from './helpers/cubeParser';
import './App.css';

import {renderCube, recolorCube} from './helpers/display';
import { findBlock } from "./helpers/blockfinder";

const faceColorMap = ['g', 'y', 'r', 'w', 'o', 'b'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cubeState: 'bbbbbbbbboooooooooyyyyyyyyygggggggggrrrrrrrrrwwwwwwwww' };
    this.cubeRawState=[6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4];
    this.device = null;
    this.moves = [];
  }
  componentWillUnmount() {
    disconnectFromBluetoothDevice(this.device);
  }
  render() {
    return (
      <div className="App">
        {/* <img
          alt="Rubik cube"
          src={`http://cube.crider.co.uk/visualcube.php?fmt=svg&r=x-90y-120x-20&size=300&fc=${this.state.cubeState}`}
        /> */}
        <div>
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
                var moveList = [];
                this.moves.forEach(move => {
                  moveList.push(move += "<br />");
                });
                //console.log(moveList);
                document.getElementById("moveDisplay").innerHTML = "<p>" + moveList + "</p>" + findBlock(cubeRawState)
              });
              device.addEventListener('gattserverdisconnected', () => {
                disconnectFromBluetoothDevice(device);
              });
            }}
          >
            Connect cube
          </button>
          <button
          >Ready</button>
          <div id="moveDisplay">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
