import React, { Component } from 'react';
export default class Overlay extends Component{

constructor(props) {
  super(props);
  this.canvas = null;
}
componentWillUpdate(newprops){
  console.log(newprops.tweets);
  var coordinadas= this.props.getProjection(newprops.tweets.coordinates.coordinates)();
  console.log(coordinadas);
}
render(){
  return (<canvas ref={(canvas)=>this.canvas}></canvas>)
}
}
