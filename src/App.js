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
import { timerController } from "./timer/timerController";

const faceColorMap = ['g', 'y', 'r', 'w', 'o', 'b'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cubeState: 'bbbbbbbbboooooooooyyyyyyyyygggggggggrrrrrrrrrwwwwwwwww' };
    this.cubeRawState=[6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4];
    this.device = null;
    this.moves = [];
    this.ready = false;
    this.timerController = new timerController();
    this.moveList = [];
    this.fbFound;
    this.sbFound;
    this.solveStats = [];
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
                this.moveList.push((cubeRawState + "<br />"));
                //console.log(moveList);
                if (this.timerController.stateTransition(cubeRawState, this.ready) == false) {
                  this.ready = false;
                }
                let blockFound = findBlock(cubeRawState);
                if (blockFound.length > 0 && !this.fbFound) {
                  this.fbFound = true;
                  console.log("First block: " + blockFound);
                  this.solveStats.push({ "movecount": (this.moveList.length -1), "block": blockFound[0].slice(0,2)});
                  
                }
                if (blockFound.length > 1 && this.fbFound && !this.sbFound) {
                  this.sbFound = true;
                  console.log("First and second block: " + blockFound);
                  blockFound.forEach(foundBlock => {
                    if (foundBlock.slice(0,2) == this.solveStats[0]["block"]) {
                    } else {
                      this.solveStats.push({ "movecount": (this.moveList.length -1), "block": foundBlock.slice(0,2)});
                    }
                  });
                }
                
                document.getElementById("moveCount").innerHTML = "<p>Moves: " + (this.moveList.length - 1) + "</p><br />";
                let statString = "";
                this.solveStats.forEach(stat => {
                  statString += "<p>Block: " + stat.block + " Moves: " + stat.movecount + "</p><br />"
                  //document.getElementById("moveDisplay").innerHTML = "<p>" + blockFound + "</p><br /><p> " + this.solveStats + "</p>";
                });
                document.getElementById("moveDisplay").innerHTML = statString;                  
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
            this.moveList = [];
            this.fbFound = false;
            this.sbFound = false;
            this.solveStats = [];
            this.moveList.push(this.cubeRawState);
            document.getElementById("moveCount").innerHTML = "<p>Moves: " + (this.moveList.length - 1) + "</p><br />";
            document.getElementById("moveDisplay").innerHTML = "<p>" + this.moveList + "</p><br />" 
            this.ready = true
            this.timerController.stateTransition(this.cubeRawState, true) == false
          }}
          >Reset</button>
          <div id="timer"><p>0.00</p></div>
          <div id="moveCount"></div>
          <div id="moveDisplay"></div>
        </div>
      </div>
    );
  }
}

export default App;
