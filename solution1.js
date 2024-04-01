let letters = `The Quick Brown Fox`; // shows the variable for the letters which are supposed to be changed in the string
 
function change(){      //function for changing the variabless
let changeLetters = ""; // declares variables for change letters
for(let i=0; i< letters.length; i++){ // its a for loop that takes variables in the string using increment and identifies the length of the string
    if([1,2,5,6,7,8,11,12,13,14,17,18].includes(i)){ // shows the various index to be changed to uppercase/ capitalletter
        changeLetters += letters[i].toUpperCase(); // changes/add the letters of specified index to uppercase
    }
    else{
        changeLetters += letters[i].toLowerCase();// changes the remaining index to lowwercase
    }
}
return changeLetters // shows the return ouput of changed letters
}
console.log(change());