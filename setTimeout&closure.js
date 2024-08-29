
// Use setTimeout on the var variable because of within a global environment at the first settimeout iteration the i value reached his limits of i = 6, js runs the 'i' iteration at the initially and then settimer time starts his iteration parallely  
//js won't wait for the settimeout time its keep runs, the setTimeout keep running parallel in the allocated memory

// function x(){
//     for(var i=1;i<=5;i++) {
//             setTimeout(function (){
//                 console.log(i);
//             }, i* 1000)
//         }
//     }
// x();




// Use setTimeout on the let variable because of within a let scope every iteration the i value keeps iterating and store in a scope  
// function x(){
//     for(let i=1;i<=5;i++) {
//             setTimeout(function (){
//                 console.log(i);
//             }, i* 1000)
//         }
//     }
// x();

// Use setTimeout on the var variable because, here we use closure so every iteration the var value keep updating and the i store in a closure memory  
function x(){
    for(var i=1;i<=5;i++) {
        function closure(i){
            setTimeout(function (){
                console.log(i);
            }, i* 1000)
        }
        closure(i)
    }
    
}
x();