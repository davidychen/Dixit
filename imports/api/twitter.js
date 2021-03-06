import { Meteor } from "meteor/meteor";
import {UsersGames} from "./usersGames.js";

let client;
let Twitter = require("twitter");

Meteor.methods({
  "twitter.invite"(info) {
    if (info == null) {
      return;
    }
    if (process.env.TWITTER_CONSUMER_KEY) {
      client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: Meteor.user().services.twitter.accessToken,
        access_token_secret: Meteor.user().services.twitter.accessTokenSecret
      });
    }
    else {
      let consumer = require("./confidential.js");
      client = new Twitter({
        consumer_key: consumer.key,
        consumer_secret: consumer.secret,
        access_token_key: Meteor.user().services.twitter.accessToken,
        access_token_secret: Meteor.user().services.twitter.accessTokenSecret
      });

    }

    let data = "";
    if (info.friends !== null) {
      let friends = info.friends.split(",");
      for (var i = 0; i < friends.length; i++) {
        data = data.concat("@",friends[i]," ");
      }
      data = data.concat("Join my Dixit game! link: https://dixitgame2019.herokuapp.com/GameRoom, accessCode: ",info.accessCode.toString());
    }

    client.post("statuses/update", { status: data }, function(
      error
      // ,
      // tweet,
      // response
    ) {
      if (error) {console.log(error);} 
       //else {
        // let id = response.id;
        // UsersGames.update ({
        //   _id: Meteor.userId()
        // }, {
        //   $set: {
        //     twitterId: id
        //   }
        // }); 
        // let id = tweet.id;
        // UsersGames.update ({
        //   _id: Meteor.userId()
        // }, {
        //   $set: {
        //     twitterId: id
        //   }
        // }); 
      //}
    });
  }});
  // },

  // "twitter.delete"(info) {
  //   if (info == null) {
  //     return;
  //   }
  //   if (process.env.TWITTER_CONSUMER_KEY) {
  //     client = new Twitter({
  //       consumer_key: process.env.TWITTER_CONSUMER_KEY,
  //       consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  //       access_token_key: Meteor.user().services.twitter.accessToken,
  //       access_token_secret: Meteor.user().services.twitter.accessTokenSecret
  //     });
  //   }
  //   else {
  //     let consumer = require("./confidential.js");
  //     client = new Twitter({
  //       consumer_key: consumer.key,
  //       consumer_secret: consumer.secret,
  //       access_token_key: Meteor.user().services.twitter.accessToken,
  //       access_token_secret: Meteor.user().services.twitter.accessTokenSecret
  //     });

  //   }

  //   let res = UsersGames.findOne({_id: Meteor.userId()});

  //   let twitterId = res.twitterId;
  //   client.post("statuses/destroy", { id: twitterId }, function(
  //     error,
  //     tweet,
  //     response
  //   ) {
  //     if (error) throw error;
  //   });
  // }
//});