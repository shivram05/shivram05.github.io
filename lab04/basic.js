let arr=[2,3,5];
let longWord = ["Google", "Yahoo", "Amazon", "Microsoft"];



function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  

// MAX
function max(x, y){
    if(x>y){
        return x;
    }
    else
        return y;
} 
console.log("Expected output of max(50,16) is 50  " + myFunctionTest(50, max(50,16)));


//MAX OF THREE
function maxOfThree(x, y, z){
    if(x>y && x >z){
        return x;
        
    }
    else if(y>z){
       return y;
    }
    else{
        return z;
    }

}
console.log("Expected output of maxOfThree(12,200,90) is 200  " + myFunctionTest(200, maxOfThree(12, 200,90)));


//IS VOWEL FUNCTION
function isVowel(c){
    if(c=='a'|| c == 'e'|| c == 'i'|| c == 'o'|| c == 'u'){
        return true;
    }
    else
        return false;
}
console.log("Expected output of isVowel(u) is true" + myFunctionTest(true, isVowel('e')));


//SUM OF ARRAY ELEMENTS
function sum(add){
    let result = 0;
    for(let i = 0; i <add.length; i++){
        result = result + add[i];
    }
    return result;
}
console.log("Expected output of sum [1,2,3,4] is 10  " + myFunctionTest(10, sum([1,2,3,4])));


//MULTIPLY OF ARRAY ELEMENTS
function multiply(mult){
    let result = 1;
    for(let i = 0; i < mult.length; i++){
        result = result*mult[i];
    }
    return result;
}
console.log("Expected output of multiply[1,2,3,4] is 24  " + myFunctionTest(24, multiply([1,2,3,4])));


//REVERSE STRING
function reverse(string){

    return string.split('').reverse().join('');
}
console.log("Expected output of reverse(jag testar) is ratset gaj " + myFunctionTest("jag testar", reverse("ratset gaj")));


//TO FIND LONGEST WORD AND RETURN THE LENGTH OF IT
function findLongestWord(word){
    let lenght1=0;
    for(let i = 0 ; i < word.length; i++){
         let lenght2 = word[i].length;

        if(lenght2 > lenght1){
            lenght1 = lenght2;
        }
    }
    return lenght1;
}
console.log("Expected output of findLongestWord[Apple, Computer, Data, Cable, DataScience, Laptop] is 11  " + myFunctionTest(11, findLongestWord(["Apple", "Computer", "Data", "Cable", "DataScience", "Laptop"])));


//FILTER LONG WORDS -- TAKES AN ARRAY OF WORDS AND AN INTEGER i AND RETURNS THE ARRAY OF WORDS THAT ARE LONGER THAN i
function filterLongWords(word, i){
    let arr = [];
    for(let j = 0 ; j < word.length ; j++)
    {
        if(word[j].length > i){
           arr.push(word[j]);
        }
    }
    return arr;
}
console.log("Expected output of filterLongWords['Google', 'Yahoo', 'Amazon', 'Microsoft'] is ['Google', 'Amazon', 'Microsoft']  " + myFunctionTest(JSON.stringify(['Google', 'Amazon', 'Microsoft']), JSON.stringify(filterLongWords(['Google', 'Yahoo', 'Amazon', 'Microsoft'], 5))));


