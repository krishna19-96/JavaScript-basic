let schl = {
    name : 'muthu',
    Age: 27,
    professional: 'IT',

    studies: function(){
        console.log(this.name); //this represent the current object you want to access the other fun object you can call the other object name 
    }

}

schl.studies()