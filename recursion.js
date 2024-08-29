let num = 1;
function show(){
    console.log('Hi', num);
    num++;
    show(); // Recursion is you can call the function itself ex: Fatorial pgm
}

show()