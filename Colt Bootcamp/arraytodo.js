var todos = ["Buy New Turtles"];

var input = prompt("What would you like to do?")

while (input !== "quit") {
	if(input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodos();
	}	else if (input === "delete") {
		deleteTodo();
	}
	input = prompt ("What would you like to do?")
}
console.log("Ok, you quit the app")


function listTodos(){
		console.log("***************");
		todos.forEach(function(todo, i) {
			console.log(i + ": "+ todo);
			console.log("****************");
		}
		);
		}

function addTodos(){
			var newTodo = prompt("Enter new Todo");
		todos.push(newTodo);
		console.log("Added to do")
}


function deleteTodo() {
		var index = prompt("enter the index of to do to be deleted")
		todos.splice(index,1);
		console.log("delted to do")
		}