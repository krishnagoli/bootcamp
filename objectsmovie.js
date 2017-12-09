var movies = [
	{
		title : "Transformers",
		hasWatched : true,
		rating : 5
	},
	{
		title : "Expendables",
		hasWatched : false,
		rating : 4	
	}
]

movies.forEach(function(movie) {
	var result = "You have ";
	if(movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + "stars;"
	console.log (result);
})