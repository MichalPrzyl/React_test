class Person{
    name = "a";
    constructor(name){
        this.name = name;
        // this.introduce = () =>{
        //     console.log(`TO jest w konstruktorze, imie: ${this.name}`);
        // }
    }
    introduce = () =>{
        console.log("to jest poza konstruktorem:  " + this.name);
    }
}

var os1 = new Person("Michał");

os1.introduce();