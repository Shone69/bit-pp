        function Genre(name) {
            this.name = name;
        };

        function Movie(title, genreO, movieLength) {
            this.title = title;
            this.genreO = genreO;
            this.movieLength = movieLength;
        };

        function Program(date) {
            this.date = new Date(date);
            this.listOfMovies = [];
            this.numberOfMovies = 0;
        };

        function Festival(name) {
            this.name = name;
            this.listOfPrograms = [];
            this.numberOfAllMovies = 0;
        };

        Genre.prototype.getData = function () {
            return `${this.name.charAt(0)}${(this.name.charAt(this.name.length - 1)).toUpperCase()}`;
        };
        Movie.prototype.getData = function () {
            return `${this.title}, ${this.movieLength} "min",${this.genreO.getData()}`;
        };

        Program.prototype.addMovie = function (movieO) {
            this.listOfMovies.push(movieO);
            this.numberOfMovies++;
        };

        Program.prototype.getData = function () {
            let totalLength = 0;
            let output = "";
            this.listOfMovies.forEach(function (element) {
                totalLength += element.movieLength;
                output += element.getData();
            });
            const firstRow = `${this.date},  ${totalLength} min
            `;
            return firstRow + output;
        };

        Festival.prototype.addProgram = function (programO) {
            this.listOfPrograms.push(programO);
            this.numberOfAllMovies += programO.numberOfMovies;
        };

        Festival.prototype.getData = function () {
            let firstRow = `${this.name},  ${this.numberOfAllMovies}, movie-titles`;
            let output = "";
            this.listOfPrograms.forEach(function (element) {
                output += element.getData();
            });
            return firstRow + output;
        };

        const sunDance = new Festival("Sun Dance");

        const action = new Genre("action");
        const redemption = new Movie("The Shawsshank Redemption", action, 130);


        const program1 = new Program("10.28.2017");
        const program2 = new Program("10.29.2017");

        const spiderMan = createMovie("Spider Man: Hometown", "Action", 133);
        const planetOfApes = createMovie("War for the Planet of the Apes", "Drama", 140);
        const darkTower = createMovie("The Dark Tower", "Western", 95);
        const deadpool = createMovie("Deadpool", "Comedy", 108);

        program1.addMovie(spiderMan);
        program1.addMovie(planetOfApes);
        program1.addMovie(darkTower);

        program2.addMovie(deadpool);

        sunDance.addProgram(program1);
        sunDance.addProgram(program2);



        function createMovie(title, genreName, movieLength) {
            const genreO = new Genre(genreName);
            return new Movie(title, genreO, movieLength);
        };


        console.log(sunDance.getData());