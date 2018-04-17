var todos = [];

window.setTimeout(function() {

	todos = ["Buy New Turtle"];

	var input = prompt("What would you like to do?");

	while (input !== "quit") {
		if (input === "list") {
			listTodo();
		}

		else if (input === "new") {
			addTodo();
		}
		else if (input === "delete") {
			deleteTodo();
		}

		input = prompt("What would you like to do?");
	}
	console.log("Ok, you quit the app");
}, 500);

function listTodo(){
	console.log("***********")
	todos.forEach(function(todo, index){
		console.log(`${ index }: ${todo}`);
	});
	console.log("***********")
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
	const index = prompt("What is the index of the item to delete?");
	todos.splice(index, 1);
	console.log("Deleted Todo");
}
