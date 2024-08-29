
let laptop2 = {
    cpu: 'i7',
    ram: '16',
    brand: 'Lenovo',

    getconfig: function(){
        console.log(this.cpu);
    }
}

let laptop1 = {
    cpu: 'i18',
    ram: 16,
    brand: 'HP',

    compare: function(other){
        if(this.cpu > other.cpu)
            console.log(this.cpu);
        else
            console.log(other.cpu);
    },
    getcofig: function(){
        console.log(this.cpu);
    }
}




laptop1.compare(laptop2)