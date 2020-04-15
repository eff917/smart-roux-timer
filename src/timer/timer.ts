export type Milliseconds = number;

export class Timer {
    private running: boolean = false;
    private animFrameBound: () => void;
    private startTime: number = Date.now();
    constructor(private currentTimeCallback: (t: Milliseconds) => void) {
      this.animFrameBound = this.animFrame.bind(this);
    };
  
    public isRunning(): boolean {
      return this.running;
    }
  
    start() {
      this.startTime = Date.now();
      //this.currentTimeCallback(0);
      this.running = true;
      requestAnimationFrame(this.animFrameBound);
    }
    getTime() {
      let time = this.elapsed();
      return time;
    };
  
    stop() {
      this.running = false;
      // cancelAnimationFrame(this.animFrameBound); // TODO: BUG
      var time = this.elapsed();
      //this.currentTimeCallback(time);
      return time;
    }
  
    reset() {
      //this.currentTimeCallback(0);
    }
  
    private animFrame() {
      if (!this.running) {
        return;
      }
      //this.currentTimeCallback(this.elapsed());
      requestAnimationFrame(this.animFrameBound);
    }
  
    private elapsed() {
      return Date.now() - this.startTime;
    }
  }