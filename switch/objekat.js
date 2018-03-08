

var objekat=
{
    name: "Ime",
    lastName: "Prezime",
    godinaRodj: 1984,
    currentYears: (function () {
        return 2018- objekat.godinaRodj;
    })()

}
console.log(objekat);

