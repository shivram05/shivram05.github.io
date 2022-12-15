const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    

    readline.question('What is your age? ', age => {
        let userAge = age;
    
        if(userAge<16){
            console.log("You are not allowed to drive in IOWA")
        }else{
            console.log("You’re allowed to get a drivers license in IOWA")
        }
        readline.close();
       });
   });

  

//    readline.ans
   