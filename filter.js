age = [21,35,41,59,31,44]

age.filter((ag) => ag>=31) // filter take value and check the condition 
   .map(ag=> ag*2) //Map take value and double it 
   .forEach(ag => {
    console.log(ag);
   });

//filter load the all value and fetch from the function  