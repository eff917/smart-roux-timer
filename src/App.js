import React from 'react';

import {
  connectToBluetoothDevice,
  startNotifications,
  disconnectFromBluetoothDevice
} from './helpers/bluetooth';
import { parseCube } from './helpers/cubeParser';
import './App.css';

import {renderCube, recolorCube} from './helpers/displayCube';
import { timerController } from "./timer/timerController";
import { findBlock } from "./helpers/roux/blockfinder";
import { isCMLLsolved } from "./helpers/roux/cmll";
import { isEOsolved } from "./helpers/roux/eo";

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
    this.solveStats = {};
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
                //console.log(cubeRawState);
                recolorCube(cubeRawState);
                renderCube();    
                this.moveList.push((cubeRawState));
                //console.log(moveList);
                if (this.timerController.stateTransition(cubeRawState, this.ready) == false) {
                  this.ready = false;
                }
                let blockFound = findBlock(cubeRawState);
                if (blockFound.length > 0 && !this.fbFound) {
                  this.fbFound = true;
                  console.log("First block: " + blockFound + " " + this.timerController.timer.getTime());
                  this.solveStats["FB"] = { 
                    "movecount": (this.moveList.length -1), 
                    "block": blockFound[0].slice(0,2),
                    "time": this.timerController.timer.getTime(),
                  };
                  
                }
                if (blockFound.length > 1 && this.fbFound && !this.sbFound) {
                  this.sbFound = true;
                  console.log("First and second block: " + blockFound + " " + this.timerController.timer.getTime());
                  blockFound.forEach(foundBlock => {
                    if (foundBlock.slice(0,2) == this.solveStats["FB"].block) {
                    } else {
                      this.solveStats["SB"] = { 
                        "movecount": (this.moveList.length -1), 
                        "block": foundBlock.slice(0,2),
                        "time": this.timerController.timer.getTime(),
                      };
                    };
                  }); 
                };
                if (!this.cmllDone && this.sbFound && isCMLLsolved(cubeRawState)) {
                  console.log("CMLL done " + this.timerController.timer.getTime());
                  this.solveStats["CMLL"] = { 
                    "movecount": (this.moveList.length -1), 
                    "time": this.timerController.timer.getTime(),
                  };
                  this.cmllDone = true;
                };
                // start checking for EO
                if (!this.eoDone && this.cmllDone && isEOsolved(cubeRawState)) {
                  console.log("LSE/EO done " + this.timerController.timer.getTime())
                  this.solveStats["EO"] = { 
                    "movecount": (this.moveList.length -1), 
                    "time": this.timerController.timer.getTime(),
                  };
                  this.eoDone = true;
                };
                if (!this.solved && this.eoDone && this.timerController.isSolved(cubeRawState)) {
                  console.log("Cube solved! " + this.timerController.timer.getTime());
                  this.solveStats["END"] = { 
                    "movecount": (this.moveList.length -1), 
                    "time": this.timerController.timer.getTime(),
                  };
                  this.solved = true;

                };
                
                
                document.getElementById("moveCount").innerHTML = "<p>Moves: " + (this.moveList.length - 1) + "</p><br />";
                let statString = "";
                for(var key in this.solveStats) {
                  statString += "<p>" + key + ": " + this.solveStats[key].block;
                  statString += " Moves: " + this.solveStats[key].movecount;
                  statString += " Time: ";
                  switch(key) {
                  case "FB":
                    statString += this.timerController.convertTime(this.solveStats[key].time);
                      break;
                    case "SB":
                      statString += this.timerController.convertTime((this.solveStats[key].time - this.solveStats["FB"].time) );
                      break;
                    case "CMLL":
                      statString += this.timerController.convertTime((this.solveStats[key].time - this.solveStats["SB"].time) );
                      break;
                    case "EO":
                      statString += this.timerController.convertTime((this.solveStats[key].time - this.solveStats["CMLL"].time) );
                      break;
                    case "END":
                      statString += this.timerController.convertTime((this.solveStats[key].time - this.solveStats["EO"].time) );
                      break;
                  };
                  statString += "</p>";
                  // do something with "key" and "value" variables
                }
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
            this.cmllDone = false;
            this.eoDone = false;
            this.solved = false;
            this.solveStats = [];
            this.moveList.push(this.cubeRawState);
            document.getElementById("moveCount").innerHTML = "<p>Moves: " + (this.moveList.length - 1) + "</p><br />";
            document.getElementById("moveDisplay").innerHTML = "<p></p><br />";
            this.ready = true
          }}
          >Ready</button>
          <div id="timer"><p>0.00</p></div>
          <div id="moveCount"></div>
          <div id="moveDisplay"></div>
        </div>
      </div>
    );
  }
}

export default App;
