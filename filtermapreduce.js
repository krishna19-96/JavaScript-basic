a = [,51,61,72,34,66]

const res = a.filter(ab => ab%2==0)
 .map(ab=> ab*2)
 .reduce((a,e) => a+e);


console.log(res); 
 