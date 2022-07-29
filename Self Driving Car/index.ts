import { getObstacleEvents } from "./computer-vision";

interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

interface Events {
  [i: string]: boolean;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }
  respond(events: Events) {
    Object.keys(events).forEach((eventKey) => {
      if (eventKey === "false") {
        return;
      }
      if (eventKey === "ObstacleLeft") {
       return this.steeringControl.turn("right.");
      }
      if (eventKey === "ObstacleRight") {
        return this.steeringControl.turn("left.");
      }
    });
    if (this.isRunning === false) {
      return console.log("The car is off.");
    } else {
    }
  }
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }

  turn(direction: string) {
    this.execute(`turn ${direction}`);
  }
}

const steering = new SteeringControl();

const autonomousCar = new Car({
  isRunning: false,
  steeringControl: steering,
});

// steering.turn("right");
autonomousCar.respond(getObstacleEvents());
