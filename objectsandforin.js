let input = 'Age'

let school = {
    name: 'Muthu',
    roll: 16,
    Age:27,
    'work expirence' : 5.7, // if you declare properties name with space use -''
    company: {
        first: 'lynk',
        sencond: 'corefultech'
    }

}

// console.log(school.name)
// console.log(school['roll']);
// console.log(school["work expirence"])
// console.log(school[input]);

console.log(school.company.first?.length) // ? is used to check if the key is present or not if its not it will show 'undefined'

delete school.Age

for (let key in school.company){
    console.log(key, school.company[key])
}

