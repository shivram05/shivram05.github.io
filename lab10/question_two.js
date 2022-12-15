const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   var  waitForUserInput  = function() {
    readline.question("Please Enter a number, if you want to stop, please type STOP ", function(input) {
      if (input == "STOP" || input=="stop"){
        readline.close();
        console.log("The Program is terminated.")
      } else {
          waitForUserInput();
      }
    });
  }

  waitForUserInput();
