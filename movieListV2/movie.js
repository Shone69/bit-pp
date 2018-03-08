var dataModule = (function () {
    var listOfMovies = [];

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getData = function () {
        return this.title + ", " + this.genre + " duration: " + this.length;
    }

    function addMovie(title, length, genre) {
        var movie = new Movie(title, length, genre);
        listOfMovies.push(movie);
        return movie;
    }

    return {
        addMovie: addMovie
    }
})();

var uiModule = (function () {
    var domQueries = {
        button: ".create-movie",
        inputTitle: ".movie-title",
        inputLength: ".movie-length",
        inputGenre: ".genre-select"
    }
    var movieValues = {
        title: document.querySelector(".movie-title"),
        length: document.querySelector(".movie-length"),
        genre: document.querySelector(".genre-select"),
        button: document.querySelector(".create-movie"),
        displayMovieList: document.querySelector(".movie-list"),
    }

    var objectToExpose = {
        movieValues: movieValues,
    };

    return objectToExpose
})();

var controller = (function (data, ui) {
    var buttonElement = ui.movieValues.button;
    var titleElement = ui.movieValues.title;
    var length = ui.movieValues.length;
    var genre = ui.movieValues.genre;
    
    
    buttonElement.addEventListener("click", createMovie);
    
    function createMovie() {
        var titleInputValue = titleElement.value;
        var createdMovie = dataModule.addMovie(titleInputValue, length.value, genre.value);
        
        // var display = titleInputValue + ", " + genre.value + "- duration:" + length.value;
        
        var newElement = document.createElement("p");
        newElement.textContent = createdMovie.getData();
        
        var displayList = ui.movieValues.displayMovieList;
        console.log(displayList);
        
        displayList.appendChild(newElement);
    }

})(dataModule, uiModule);