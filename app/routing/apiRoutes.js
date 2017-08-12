const user = require('../data/friends.js');
console.log(user.current[0].scores)
let scoreArray = [];
let totalScore = 0;
for(item in user.all){
	let allScores = user.all[item].scores;
	console.log(allScores)
	for(let i = 0; i < allScores.length; i ++){
		if(allScores[i] === user.current[0].scores[i]){
			console.log("matches")
			totalScore++
		}
		
	}
	
scoreArray.push(totalScore);
totalScore = 0;	
	}
//returns index of largest value in array
let index = scoreArray.indexOf(Math.max(...scoreArray));

	
   
console.log(scoreArray)
let run2 = function(app){

app.post("/api/friends", function(req, res) {
   
  

})
}

module.exports = run2