// Print All Numbers between -10 and 19
console.log("Print All Numbers between -10 and 19")
// var counter = -10;

// while(counter <= 19) {
// 	console.log(counter);
// 	counter++;
// }

for (var i = -10; i < 20; i++) {
	console.log(i)
}


// // Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40")
// var counter = 10;
// while(counter <= 40) {
// 	if(counter % 2 === 0){
// 	console.log(counter);
// 	}
// 	counter+=1;
// }
for (var i = 10; i <= 40; i +=1) {
	if (i%2 === 0) {
	console.log(i);
	}
}

// // Print all Odd numbers between 300 and 333
console.log("Print all Odd numbers between 300 and 333")
// var counter = 300;
// while(counter <= 333) {
// 	if (counter % 2 == 1) {
// 	console.log(counter);
// 	}
// 	counter+=1;
// }
for (var i = 300; i <= 333; i += 1) {
	if (i%2 !== 0) {
	console.log(i);
	}
}
// // Print all numbers divisible by 5 and 3 between 5 and 50
console.log("Print all numbers divisible by 5 and 3 between 5 and 50")
// var counter = 5;
// while(counter <= 50) {
// 	if (counter % 5 === 0 && counter % 3 === 0) {
// 	console.log(counter);
// 	}
// 	counter+=1;
// }
for (var i = 5; i <= 50; i += 1) {
	if (i%5 === 0 && i%3 === 0) {
	console.log(i);
	}
}