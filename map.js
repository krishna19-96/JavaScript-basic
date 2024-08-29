const maps = new Map();

maps.set('Muthu1','js')
maps.set('Muthu2','python')
maps.set('Muthu3','go')
maps.set('Muthu4','Rust')

console.log(maps.has('Muthu1'));
console.log(maps.get('Muthu2'));
maps.delete('Muthu3');
console.log(maps);


for(let [k,v] of maps){
    console.log(k,v);
}

maps.forEach((k,v)=> {
    console.log(v,k);
})