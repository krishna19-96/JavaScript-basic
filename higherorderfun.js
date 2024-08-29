const radius = [3,2,1,4];

const calculateArea = function(radius){
    return Math.PI * radius * radius
}


const area = function(radius, logic){
    const output = [];
    for(let j=0; j< radius.length; j++){
        output.push(logic(radius[j]))
    }
    return output

};

console.log(radius.map(calculateArea));
console.log(area(radius,calculateArea));