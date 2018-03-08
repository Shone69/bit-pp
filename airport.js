"use strict mode";

(function hi() {
    console.log("Hi :-)")


    function Person(name, surname) {
        this.name = name;
        this.surname = surname
    }

    function Seat(number, category="e") {
        this.number = (function () {
            return number || Math.floor(Math.random() * (100 - 10) + 10);
        })();
        this.category = (function () {
            return category;
        })();
    }

    function Passenger(personO, seatO= "stojis") {
        this.person = personO;
        this.seat = seatO;  
    }

    function Flight(departure, arrival, date) {
        this.relation = departure + "-" + arrival;
        this.date = date;
        this.PassengerList = [];
        this.numberOfPassangers = 0;
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];   
    }

    Person.prototype.getData = function () {
        return this.name + " " + this.surname;
    }

    Seat.prototype.getData = function () {
        return this.number + ", " + this.category;
    }
            
    Passenger.prototype.getData = function () {
        return this.Seat.getData() + ", " + this.person.getData();
    }

    Flight.prototype.getData = function () {
        return this.date + " " + this.relation;

    }

    Flight.prototype.addPassenger = function (Passenger) {
        this.PassengerList.push(Passenger);
        this.numberOfPassangers += 1;
    }

    Airport.prototype.addFlight = function (Flight) {
        this.listOfFlights.push(Flight);
    }

    Airport.prototype.getData = function () {
        var output = "";
        var firstRow = "";
        var myAirport = this.name;
        var totalNumber = 0;
        
        this.listOfFlights.forEach(function (element) {
            totalNumber += element.numberOfPassangers;
            output+= "\t" + element.getData() + "\n";
            element.PassengerList.forEach(function(el){
                output+= "\t\t" +el.getData() + "\n";
            
            })
        });

        firstRow = "Airport: " + myAirport + ", " + "total passengers: " + totalNumber + "\n";
        return firstRow + output;
    }

    function createFlight(departure, arrival, date) {
        return new Flight(departure, arrival, date);
    }

    function createPassenger(personO, seatO) {
        return new Passenger(personO, seatO)
    }

    // function createPassenger(name, surname, seatNumber, category) {
    //     var person = new Person(name, surname);
    //     var seat = new Seat(seatNumber, category);
    //     return new Passenger(person, seat);
    // }

    // var ceda = createPassenger( "Ceda", "Brisic", 17, "e")

    var BelgradeParis = new Flight("Belgrade", "Paris", "25.09.2017");
    var BarcelonaBelgrade = createFlight("Barcelona", "Belgrade", "25.11.2017");
    var BelgradeNewYour = createFlight("Belgrade", "New York", "26.09.2017");

    var KhaleesiP = new Person("Daenerys", "Targaryen");
    var KhaleesiSeat = new Seat(13, "B");
    var Khaleesi = createPassenger(KhaleesiP, KhaleesiSeat);

    var CerseiP = new Person("Cersei", "Lannister");
    var CerseiSeat = new Seat(2, "b");
    var Cersei = createPassenger(CerseiP, CerseiSeat);

    var TyrionP = new Person("Tyrion", "Lannister");
    var TyrionSeat = new Seat();
    var Tyrion = createPassenger(TyrionP, TyrionSeat);

    var JohnSnowP = new Person("John", "Snow");
    var SnowSeat = new Seat(12, "A");
    var JohnS = new Passenger(JohnSnowP,123);

    var NikolaTesla = new Airport();
    var AirSerbia = new Airport();

    BelgradeParis.addPassenger(JohnS);

    BelgradeNewYour.addPassenger(JohnS);
    BelgradeNewYour.addPassenger(Khaleesi);

    BarcelonaBelgrade.addPassenger(Tyrion);
    BarcelonaBelgrade.addPassenger(Cersei);

    NikolaTesla.addFlight(BelgradeParis);

    AirSerbia.addFlight(BelgradeNewYour);
    AirSerbia.addFlight(BarcelonaBelgrade);




    // console.log(BelgradeNewYour.getData());
    console.log(AirSerbia.getData());
})();