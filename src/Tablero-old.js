import React, { Component } from "react";

export default class Tablero extends Component {
  casillasX = 8;
  casillasY = 8;
  array = [];

  constructor(props) {
    super(props);
    this.crear();
  }

  componentDidMount() {
    this.dibujar();

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.addEventListener('click',(e)=>{
        const {pageX,pageY}=e;
        const {offsetLeft,offsetTop}=e.target;
        // console.log(pageX/8,pageY/8);
        console.log(e);
        console.log(this.calcularPosicion(pageX-offsetLeft ,pageY-offsetTop,600));
    })
  }

  calcularPosicion(x,y,long){
    // return [Math.trunc((x*8)/long),Math.trunc((y*8)/long)];
    this.array[Math.trunc((y*8)/long)][Math.trunc((x*8)/long)]=1;
    // this.array[5][1]=1;
    console.log(this.array);
  }

  crear = () => {
      this.array = [...Array(8)].map(e => Array(8).fill(0));
    // this.array = Array.from( Array(this.casillasX).fill(Array.from(Array(this.casillasY).fill(0))));
    // this.array= [
    //     [0,0,0,0,0,0,0,0],
    //     [0,0,0,0,0,0,0,0],
    //     [0,0,0,0,0,0,0,0],
    //     [0,0,0,0,0,0,0,0],
    //     [0,0,0,0,0,0,0,0],
    //     [0,0,0,0,0,0,0,0],
    //     [0,0,0,0,0,0,0,0],
    //     [0,0,0,0,0,0,0,0]
    // ];
    console.log(this.array);
  };

  dibujar = () => {
    // const canvas = document.querySelector('.tablero');
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    for (var i = 0; i < this.casillasX; i++) {
      for (var j = 0; j < this.casillasY; j++) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.strokeRect(j * 75, i * 75, 75, 75);
        ctx.closePath();
      }
    }
  };

  render() {
    // constructor(casillasX, casillasY) {
    //   this.casillasX = casillasX;
    //   this.casillasY = casillasY;
    // }

    return (
      <div>
        <canvas
          className="tablero"
          id="myCanvas"
          width="600"
          height="600"
          style={{ background: "pink" }}
        ></canvas>
      </div>
    );
  }
}
