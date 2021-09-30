import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useEffect } from "react";
const canvasStyles = {
  position: "absolute",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export default class ItsConfetti extends React.Component {
  constructor(props) {
    super(props);
    this.animationInstance = null;
  }


  makeShot = (particleRatio, opts) => {
    this.animationInstance &&
      this.animationInstance({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  };

  fire = () => {
    this.makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    this.makeShot(0.2, {
      spread: 60,
    });

    this.makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  handlerFire = () => {
    this.fire();
  };

  getInstance = (instance) => {
    this.animationInstance = instance;
  };



  render() {
    return (
      <>
        <div
          className="z-10 absolute w-full h-full"
        >
          <ReactCanvasConfetti
            refConfetti={this.getInstance}
            style={canvasStyles}
          />
        </div>
      </>
    );
  }
}
