let getDate = (date) => {
    const datum = new Date (date);
    const dd = datum.getDate();
    const mm = datum.getMonth()+1;
    const yy = datum.getFullYear();
    return `${dd}-${mm}-${yy}`;
}

class Genre {
    constructor(name) {
        this.name = name
    }

    getData() {
        return `${(this.name.charAt(0).toUpperCase())}${(this.name.charAt(this.name.length - 1)).toUpperCase()}`
    }
};

class Movie {
    constructor(title, genreObj, length) {
        this.genre = genreObj;
        this.title = title;
        this.length = length;
    }
    getData() {
        return `    ${this.title}, ${this.length} min,${this.genre.getData()}\n`;
    }
};

class Program {
    constructor(date) {
        this.date = getDate(date);
        this.listOfMovies = [];
        this.numberOfMovies = 0;
    }
    addMovie(movieObj) {
        this.listOfMovies.push(movieObj);
        this.numberOfMovies++;
    }
    getData() {
        let totalLength = 0;
        let output = "";
        this.listOfMovies.forEach(element => {
            totalLength += element.length;
            output += element.getData();
        });
        const firstRow = `${this.date},  ${totalLength} min\n`;
        return firstRow + output;
    }

};

class Festival {
    constructor(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfAllMovies = 0;
    }
    addProgram(programObj) {
        this.listOfPrograms.push(programObj);
        this.numberOfAllMovies += programObj.numberOfMovies;
    }
    getData() {
        let firstRow = `${this.name},  ${this.numberOfAllMovies}, movie-titles\n`;
        let output = "";
        this.listOfPrograms.forEach(element => {
            output += element.getData();
        });
        return firstRow + output;
    };
};


const sunDance = new Festival("Sun Dance");

const action = new Genre("action");
const drama = new Genre("drama");
const redemption = new Movie("The Shawsshank Redemption", action, 130);


const program1 = new Program("10.28.2017");
const program2 = new Program("10.29.2017");

const spiderMan = new Movie ("Spider Man: Hometown", action, 133);
const planetOfApes = new Movie ("War for the Planet of the Apes", drama, 140);
const darkTower = new Movie ("The Dark Tower", drama, 95);
const deadpool = new Movie ("Deadpool", action, 108);

program1.addMovie(spiderMan);
program1.addMovie(planetOfApes);
program1.addMovie(darkTower);

program2.addMovie(deadpool);

sunDance.addProgram(program1);
sunDance.addProgram(program2);

console.log(sunDance.getData());