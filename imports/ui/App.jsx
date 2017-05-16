import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer} from "meteor/react-meteor-data"
import d3 from "d3";



import TweetsResults from "./TweetsResults.jsx";
import ColombiaMap from "./ColombiaMap.jsx"
import Overlay from "./Overlay.jsx";
import {Tweets} from "../api/Tweets.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.projection=null;

  }

  changeQuery(evt) {
    if (evt.key !== "Enter") {
      return;
    }
    // "this" will change in the method call, so I need to save it
    let component = this;

    console.log(evt.target.value);
    Meteor.call("twitter.stream", evt.target.value);

  }

  setProjection(projection)
  {
    this.projection=projection;
  }
  getProjection(projection)
  {
    return this.projection;
  }

  render() {
    console.log("render!");
    return (
      <div>
        <input type="text" onKeyPress={this.changeQuery.bind(this)} placeholder="Query"/>
        { this.props && this.props.err ?
          <div>Error: {this.props.err}</div> :
          <span></span>
        }
        <h2>Map of Colombia</h2>
        <div id="container">
        <Overlay getProjection={this.getProjection.bind(this)} tweets={this.props.tweets}></Overlay>
        <ColombiaMap
          width="600"
          height="600"
          setProjection={this.setProjection.bind(this)}
          data={{RISARALDA:0, CALDAS:0}}
        ></ColombiaMap>
        <p>Blue: Less than 1000 followers</p>
        <p>Purple: From 1000 to 10000 followers</p>
        <p>Yellow: More than 10000 followers</p>
      </div>
        <h2>Results:</h2>
        {this.props && this.props.tweets ?
          <TweetsResults tweets={this.props.tweets}/> :
          <p>Enter a query</p>
        }

      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
  Meteor.subscribe("tweets");


  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);
