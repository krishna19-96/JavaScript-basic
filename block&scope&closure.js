function x(){
    a=10
    function y(){
        console.log(a)
    }
    a=33
    y();
}
x();

