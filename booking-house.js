function Country(name, odds, continent) {
    this.name = name;
    this.acronym = acronym(this.name);
    this.odds = odds;
    this.continent = continent;
}


function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
}

function Player(personO, bettingAmount, countryO) {
    this.person = personO;
    this.bettingAmount = bettingAmount;
    this.country = countryO;
    this.expectedWinningAmount = (this.bettingAmount * this.country.odds).toFixed(2);
}

function Address(country, city, postalCode, street, num) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.num = num;
}

function BettingPlace(AddressO) {
    this.address = AddressO;
    this.listOfPlayers = [];
    this.numberOfPlayers = 0;
}

function BettingHouse(competition) {
    this.competition = competition;
    this.bettingPlaces = [];
    this.numberOfPlayers = 0;
}

function acronym(name) {
    return (name.charAt(0) + name.charAt(1)).toUpperCase();
}

var date = new Date();

function birthDate(dateOfBirth) {
    this.date = new Date(dateOfBirth);
    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
}

function yearsOld (dateOfBirth){
    var birthDate = new Date(dateOfBirth);
    var result = (date.getFullYear()) - (birthDate.getFullYear());
    return result;
};


var todayDateO = {
    dd: date.getDate(),
    mm: date.getMonth() + 1,
    yy: date.getFullYear(),
};

var Con = {
    ASIA: "AS",
    EUROPE: "EU",
    AFRICA: "AF",
    SOUTH_AMERICA: "SA",
    NORTH_AMERICA: "NA",
    AUSTRALIA: "AU",
};

var Continents = Object.freeze(Con);

function newPlayer(name, surname, dateOfBirth, bettingAmount, countryName, odds, continent) {
    var PersonO = new Person(name, surname, dateOfBirth);
    var CountryO = new Country(countryName, odds, continent);
    return new Player(PersonO, bettingAmount, CountryO);
}

function newBettingPlace(country, city, postalCode, street, num) {
    var address = new Address(country, city, postalCode, street, num);
    return new BettingPlace(address);
}

Person.prototype.getData = function () {
    return this.name + " " + this.surname + "- " + this.dateOfBirth;
};

Player.prototype.getData = function () {
    return this.country.acronym + ", " + this.expectedWinningAmount + "EUR, " + this.person.name + " " + this.person.surname;
};

Address.prototype.getData = function () {
    return this.street + " " + this.num + ", " + this.postalCode + " " + this.city + ", " + acronym(this.country.name);
};

BettingPlace.prototype.addPlayer = function (playerO) {
    this.listOfPlayers.push(playerO);
    this.numberOfPlayers += 1;
};

BettingPlace.prototype.sumOfBets = function () {
    var sum = 0;
    for (var i = 0; i < this.listOfPlayers.length; i++) {
        sum += parseFloat(this.listOfPlayers[i].bettingAmount);
    }
    return sum;
};

BettingPlace.prototype.getData = function () {
    return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + this.sumOfBets();
};

BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
    this.bettingPlaces.push(bettingPlace);
    this.numberOfPlayers += bettingPlace.numberOfPlayers;
};

BettingHouse.prototype.getData = function () {
    var firstRow = this.competition + ", " + this.bettingPlaces.length + " betting places, " + this.numberOfPlayers + " bets \n";
    var output = "";
    var SRBIJA = 0;
    this.bettingPlaces.forEach(function(element) {
        output += "\t" + element.getData() + "\n";
        element.listOfPlayers.forEach(function(el){
            output += "\t\t" + el.getData() + "\n";
            if (el.country.acronym == "SR") {
                SRBIJA += 1;
            }
        });

    });

    return firstRow + output + " - " + "There are " + SRBIJA + " bets on Serbia";
};




var KladionicarskaKuca = new BettingHouse("Football World Cup");

var player1 = newPlayer("Ime1", "Prezime1", "1.1.1986", 1050, "Srbija", 9.90, "Europe");
var player2 = newPlayer("Ime2", "Prezime2", "2.2.1987", 1050, "Srbija", 9.90, "Europe");
var player3 = newPlayer("Ime3", "Prezime3", "3.3.1988", 1050, "Grcka", 19.80, "Europe");
var player4 = newPlayer("Ime4", "Prezime4", "4.4.1989", 1050, "Srbija", 9.90, "Europe");

var bettingPlace1 = newBettingPlace("Srbija", "Beograd", "11000", "Nemanjina", 4);
var bettingPlace2 = newBettingPlace("Srbija", "Beograd", "11000", "Nemanjina", 6);

bettingPlace1.addPlayer(player1);
bettingPlace1.addPlayer(player2);

bettingPlace2.addPlayer(player3);
bettingPlace2.addPlayer(player4);

KladionicarskaKuca.addBettingPlace(bettingPlace1);
KladionicarskaKuca.addBettingPlace(bettingPlace2);

console.log(bettingPlace1);