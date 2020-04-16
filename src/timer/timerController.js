import { Timer } from "./timer";
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
    convertTime(millisec) {
        console.log("Converting: " + millisec);
        let minutes = Math.floor((millisec/60000) << 0);
        let seconds = Math.floor((millisec/1000) % 60);
        // let millis = (Math.floor(millisec % 1000) + "0").slice(0, 2);
        let millis = ("00" + Math.floor(millisec % 1000)).substr(-3,2);
        if (minutes > 0) {
            return minutes + ":" + ("0" + seconds).slice(-2) + "." + millis;
        } else {
            return seconds + "." + millis;
        }
        
    };
    stateTransition(cubeState, isReady) {
        //console.log("Checking timer.");
        //console.log("Solved: " + this.isSolved(cubeState));
        //console.log("Ready: " + isReady);
        //console.log(cubeState);
        //console.log(this.solvedState);
        if (isReady && !this.timer.isRunning()) {
            this.timer.start();
            this.solveTime = 0;
            console.log("Timer running");
        }
        if (this.timer.isRunning() && this.isSolved(cubeState)) {
            this.solveTime = this.timer.stop();
            document.getElementById("timer").innerHTML = "<p>" + this.convertTime(this.solveTime) + "</p>";
            console.log("Timer stopped");
            return false;
        }
    };
}