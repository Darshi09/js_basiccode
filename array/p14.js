// Find the Position of a Movie:
// A list of movies is ["Inception", "Avatar", "Titanic"]. Write a function to find the position of "Avatar" in the list.
// Hint: Use .indexOf().

const findMoviePosition = (movies, movieName) => movies.indexOf(movieName);

const movies = ["Inception", "Avatar", "Titanic"];
console.log(findMoviePosition(movies, "Avatar")); 
