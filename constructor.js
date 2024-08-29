function Alien(name,age){
    this.name = name;
    this.age = age;

    this.work =function(){
        console.log('this is constructor function')
    }
}

let alien1 = new Alien('muthu',25)


console.log(alien1);

alien1.work()