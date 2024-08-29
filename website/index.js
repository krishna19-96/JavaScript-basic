console.log('starts');
function cb(){
    console.log('callback');
}

setTimeout(cb, 0);

console.log('end');