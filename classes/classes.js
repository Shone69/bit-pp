class Person {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    printPersonData(){
        console.log(`${this.name} ${this.surname}`);
    }
}

class Programmer extends Person{
    constructor(name,surname,languages = []){
        super(name,surname);
        this.languages = languages;
    }
    printProgrammerData(){
        super.printPersonData()
        console.log(this.languages);
        
    }

    learnedNewLanguage(language){
       
        this.languages.push(...language);

    }
}

const Pera = new Programmer("pera","perica", ['js', 'html', 'css']);
Pera.learnedNewLanguage(["kineski","c++"]);
Pera.printProgrammerData();