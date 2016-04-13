/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
//David Hoxie
//dahoxie@gmail.com
//Assignment 6
var express = require("express"),
    http = require("http"),
    redis = require("redis"),
    bodyParser = require("body-parser"),
    app = express(),
    client = redis.createClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

http.createServer(app).listen(3000);

client.on("connect", function() {
    "use strict";
    console.log("connected");
});

//Updates value of wins/losses and returns
//a response with the result of a win or a
//loss.
app.post("/flip", function(req, res) {
    "use strict";
    var resultMessage,
        randomSide;
    if (Math.random() >= 0.5) {
        randomSide = "tails";
    } else {
        randomSide = "heads";
    }
    if (randomSide === req.body.call) {
        client.incr("wins", redis.print);
        resultMessage = "win";
    } else {
        client.incr("losses", redis.print);
        resultMessage = "lose";
    }

    res.json({
        "result": resultMessage,
    });
});

//Returns the stats json object when
//the route is accessed.
app.get("/stats", function(req, res) {
    "use strict";
    var total_wins,
        total_losses;
    client.get("wins", function(err, reply) {
        total_wins = reply;

        client.get("losses", function(err, reply) {
            total_losses = reply;

            res.json({
                wins: total_wins,
                losses: total_losses
            });
        });
    });

});

//Deletes stats data stored in the redis
//database.
app.delete("/stats", function() {
    "use strict";
    client.del("wins", redis.print);
    client.del("losses", redis.print);

});
