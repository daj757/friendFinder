const user = require('../data/friends.js');
console.log(user.current[0].scores)
let scoreArray = [];
let totalScore = 0;

console.log(scoreArray)
let run2 = function(app) {

    app.post("/api/friends", function(req, res) {
        //turns array of strings into numbers

        for (var i = 0; i < req.body.scores.length; i++) { req.body.scores[i] = parseInt(req.body.scores[i], 10); }

        for (item in user.all) {
            let allScores = user.all[item].scores;

            for (let i = 0; i < allScores.length; i++) {

                if (allScores[i] === req.body.scores[i]) {

                    totalScore++
                }

            }

            scoreArray.push(totalScore);
            totalScore = 0;
        }
        //returns index of largest value in array

        let index = scoreArray.indexOf(Math.max(...scoreArray));

        res.send(user.all[index])
        //rest
        scoreArray = []
    })

}

module.exports = run2