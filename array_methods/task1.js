let favoriteMovies = ["After", "The dark night", "Joker"];

// iterating using for loop

for (let i = 0; i < favoriteMovies.length; i++) {
  console.log(favoriteMovies[i]);
}

//using for in loop
console.log("---Using for...in loop---");
for (let index in favoriteMovies) {
  console.log(index + ": " + favoriteMovies[index]);
}

//using for of loop
console.log("using for of loop ");

for (values of favoriteMovies) {
  console.log(values + " " + favoriteMovies[values]);
}

//task2 remove element an arry

