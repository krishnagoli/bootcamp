// var answer = prompt("Are we there yet");

// while(answer !== "Yes" && answer !== "Yeah") {
// 	var answer = prompt("Get your stuff right");
// }

// alert ("Yay, we made it");

// version 2

var answer = prompt("Are we there yet");

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	var answer = prompt("Get your stuff right");
}

alert ("Yay, we made it");

