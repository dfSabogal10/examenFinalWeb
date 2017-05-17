# twitterStreamerMeteor

A simple boilerplate for a Meteor 1.4 Twitter streamer application with React. Uses the twitter [npm](https://www.npmjs.com/package/twitter) module for connecting to twitter. It requires you to setup your credentials on the server using environment variables:

```
export TWITTER_CONSUMER_KEY="yourCredentialsHere"
export TWITTER_CONSUMER_SECRET="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_KEY="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_SECRET="yourCredentialsHere"

meteor npm install
meteor
```
as a creative differentiator, the color of the tweets drawed in the map is different deppending on the number of followers of the user:

Blue: Less than 1000 followers
Purple: From 1000 to 10000 followers
Yellow: More than 10000 followers 

This is a very basic implementation that handles a global search shared by all users and doesn't implement any security or restriction. It's intended as a starting point, so add your own requirements.
