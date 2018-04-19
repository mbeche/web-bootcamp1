movieDB = [
  {
    title: "Frozen",
    hasWatched: true,
    rating: 4.5
  },

  {
    title: "Gardian's of the Galaxy vol. 2",
    hasWatched: false,
    rating: 4
  },

  {
    title: "Pulp Fiction",
    hasWatched: true,
    rating: 3
  },

  {
    title: "Pineapple Express",
    hasWatched: false,
    rating: 3.5
  }
]

for (let i = 0; i < movieDB.length; i++){
  title = movieDB[i].title;
  hasWatched = movieDB[i].hasWatched;
  rating = movieDB[i].rating;
  let watched = "";
  if (!hasWatched){
    watched = "not ";
  }
  console.log('You have ' + watched + 'seen ' + '"'+ title+'" - ' + rating + " stars");
}

// Refactored:

movieDB.forEach(function(movie){
  buildString(movie)
})

function buildString(movie){
  var result = "You have";
  if(movie.hasWatched){
    result += " watched ";
  } else {
    result += "not seen";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result);
}
