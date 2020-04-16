import { Timer } from "./timer";

export function convertTime(millisec) {
    // console.log("Converting: " + millisec);
    let minutes = Math.floor((millisec/60000) << 0);
    let seconds = Math.floor((millisec/1000) % 60);
    let millis = ("00" + Math.floor(millisec % 1000)).substr(-3,2);
    if (minutes > 0) {
        return minutes + ":" + ("0" + seconds).slice(-2) + "." + millis;
    } else {
        return seconds + "." + millis;
    }
    
};

export  class timerController {
    constructor(props) {
        this.solvedState = [6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4];
        this.timer = new Timer();
        this.solveTime = 0;
    }
    isSolved(cubeState) {
        if (JSON.stringify(cubeState) == JSON.stringify(this.solvedState)) {
            return true;
        } else {
            return false
        }
    }
    stateTransition(cubeState, isReady) {
        if (isReady && !this.timer.isRunning()) {
            this.timer.start();
            this.solveTime = 0;
            console.log("Timer running");
        }
        if (this.timer.isRunning() && this.isSolved(cubeState)) {
            this.solveTime = this.timer.stop();
            document.getElementById("timer").innerHTML = "<p>" + convertTime(this.solveTime) + "</p>";
            console.log("Timer stopped");
        }
        return false;
    };
}