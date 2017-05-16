import React, {Component} from "react";


import Tweet from "./Tweet.jsx";

export default class TweetResults extends Component {
  renderTweets() {
    this.props.tweets.map((tweet)=> {console.log(tweet);});
    return this.props.tweets.map((tweet) => {
      return (<Tweet key={tweet.id} tweet={tweet}/>);
    });
  }

  render() {
    return (
      <div className="tweetResults">
        {this.renderTweets()}
      </div>
    );
  }
}
