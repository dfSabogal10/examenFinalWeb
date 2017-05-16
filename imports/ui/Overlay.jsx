import React, { Component } from 'react';
import './Overlay.css';
export default class Overlay extends Component{

constructor(props) {
  super(props);
  this.canvas = null;
  this.coordenadas=[];
}
componentWillUpdate(newprops){
  for (var i = 0; i < newprops.tweets.length; i++) {
  if(newprops.tweets[i].coordinates)
  {
    var tweet=newprops.getProjection()(newprops.tweets[i].coordinates.coordinates);
    tweet.push(newprops.tweets[i].user.followers_count);
    this.coordenadas.push(tweet)
    console.log(tweet);
  }
}

  // var coordinadas= this.props.getProjection(newprops.tweets.coordinates.coordinates)();
  // console.log(coordinadas);

}
componentDidUpdate(newprops){
  console.log("coordenadas",this.coordenadas);
  for (var i = 0; i < this.coordenadas.length; i++) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    var tweet=this.coordenadas[i];
    if(tweet[2]<1000)
    {
      // ctx.fillStyle= 'rgba(0, 225, 225, 0.6);';
      ctx.fillStyle= 'blue';
      console.log("caso1",ctx.fillStyle);
    }
    else if (1000<=tweet[2] && tweet[2]<10000) {
      ctx.fillStyle= 'purple';
      console.log("caso2",ctx.fillStyle);
    }
    else {
      ctx.fillStyle= 'yellow';
      console.log("caso3",ctx.fillStyle);
    }
    ctx.arc(tweet[0],tweet[1], 2, 0, 2*Math.PI, false);
    ctx.fill();
    ctx.closePath();
    console.log("dibujado");
  }

}
render(){
  return (<canvas id="canvas" width="600" height="600" ref={(canvas)=>this.canvas}></canvas>)
}
}
