var MovieList = [];
var movieDiv = document.querySelector("#movieList");
var movieList = document.createElement("ul");
movieDiv.appendChild(movieList);

var programDiv = document.querySelector("#thisDay");
var programList = document.createElement("ul");
programDiv.appendChild(programList);

function Movie(title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;
}

Movie.prototype.getdata = function () {
    return this.title + ", " + this.length + ", " + this.genre;
}

function createMovie() {
    var title = document.querySelector("#titleOfMovie").value;
    var length = document.querySelector("#lengthOfMovie").value;
    var genre = document.querySelector("#genreOfMovie");
    var selectGenre = genre.options[genre.selectedIndex].value;

    var movie = new Movie(title, length, selectGenre);

    var movieItem = document.createElement("li");
    var movieText = document.createTextNode(movie.getdata());

    movieItem.appendChild(movieText);
    movieList.appendChild(movieItem);
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];


}
