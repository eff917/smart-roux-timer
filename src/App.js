import React from 'react';

import {
  connectToBluetoothDevice,
  startNotifications,
  disconnectFromBluetoothDevice
} from './helpers/bluetooth';
import { parseCube } from './helpers/cubeParser';
import './App.css';

import {renderCube, recolorCube} from './helpers/displayCube';
import { timerController, convertTime } from "./timer/timerController";
import { findBlock } from "./helpers/roux/blockfinder";
import { isCMLLsolved } from "./helpers/roux/cmll";
import { isEOsolved } from "./helpers/roux/eo";
import { displayStats } from "./helpers/roux/displaystats";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cubeRawState=[6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4];
    this.device = null;
    this.ready = false;
    this.timerController = new timerController();
    this.moveList = [];
    this.fbFound = false;
    this.sbFound = false;
    this.cmllDone = false;
    this.eoDone = false;
    this.solved = false;
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
                if (this.timerController.stateTransition(cubeRawState, this.ready) == false) {
                  this.ready = false;
                }
                const moveTime = this.timerController.timer.getTime();
                console.log("Time from move: " + moveTime);
                        if (this.solveStats.length == 0) {
                          this.solveStats.push({
                            "name": "Start",
                            "block": "",
                            "movecount": 0,
                            "time": 0
                          });
                        };
                //console.log(cubeRawState);
                recolorCube(cubeRawState);
                renderCube();    
                this.moveList.push((cubeRawState));
                //console.log(moveList);
                let blockFound = findBlock(cubeRawState);
                if (blockFound.length > 0 && !this.fbFound) {
                  this.fbFound = true;
                  console.log("First block: " + blockFound + " " + moveTime);
                  this.solveStats.push({ 
                    "name": "FB",
                    "block": blockFound[0].slice(0,2),
                    "movecount": (this.moveList.length -1), 
                    "time": moveTime,
                  });
                  
                }
                if (blockFound.length > 1 && this.fbFound && !this.sbFound) {
                  this.sbFound = true;
                  console.log("First and second block: " + blockFound + " " + moveTime);
                  blockFound.forEach(foundBlock => {
                    if (foundBlock.slice(0,2) == this.solveStats[1].block) {
                    } else {
                      this.solveStats.push({ 
                        "name": "SB",
                        "block": foundBlock.slice(0,2),
                        "movecount": (this.moveList.length -1), 
                        "time": moveTime,
                      });
                    };
                  }); 
                };
                if (!this.cmllDone && this.sbFound && isCMLLsolved(cubeRawState)) {
                  console.log("CMLL done " + moveTime);
                  this.solveStats.push({ 
                    "name": "CMLL",
                    "block": "",
                    "movecount": (this.moveList.length -1), 
                    "time": moveTime,
                  });
                  this.cmllDone = true;
                };
                // start checking for EO
                if (!this.eoDone && this.cmllDone && isEOsolved(cubeRawState)) {
                  console.log("LSE/EO done " + moveTime)
                  this.solveStats.push({
                    "name": "EO",
                    "block": "",
                    "movecount": (this.moveList.length -1), 
                    "time": moveTime,
                  });
                  this.eoDone = true;
                };
                if (!this.solved && this.eoDone && this.timerController.isSolved(cubeRawState)) {
                  console.log("Cube solved! " + moveTime);
                  this.solveStats.push({
                    "name": "LSE",
                    "block": "",
                    "movecount": (this.moveList.length -1), 
                    "time": moveTime,
                  });
                  this.solved = true;

                };
                
                
                document.getElementById("moveCount").innerHTML = "<p>Moves: " + (this.moveList.length - 1) + "</p>";
                let statString = "";
                document.getElementById("moveDisplay").innerHTML = displayStats(this.solveStats);
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
            this.fbFound = false;
            this.sbFound = false;
            this.cmllDone = false;
            this.eoDone = false;
            this.solved = false;
            this.solveStats = [];
            this.moveList = [];
            this.moveList.push(this.cubeRawState);
            this.timerController.timer.stop();
            document.getElementById("moveCount").innerHTML = "<p>Moves: " + (this.moveList.length - 1) + "</p>";
            document.getElementById("moveDisplay").innerHTML = displayStats(this.solveStats);
            this.ready = true
          }}
          >Ready</button>
          <div id="timer" align="center"><p>0.00</p></div>
          <div id="moveCount" align="center"></div>
          <div id="moveDisplay" align="center"></div>
        </div>
      </div>
    );
  }
}

export default App;
