const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const noSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const noNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let alphabetOnly = ["A","B"];


let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")
let length = 0
let allCharacters = false
let symbols = false
let numbers = false
let onlyAlphabet = false 
let array = []

//letter + numbers
function LN() {
    allCharacters = false
    symbols = true
    numbers = false
    onlyAlphabet = false
    console.log("is LN being called?")
    determineArray()
}

function LS() {
    allCharacters = false
    symbols = false
    numbers = true
    onlyAlphabet = false
    console.log("is LS being called?")
    determineArray()
}

function L() {
    allCharacters = false
    symbols = false
    numbers = false
    onlyAlphabet = true
    console.log("is L being called?")
    determineArray()
}

function all() {
    allCharacters = true
    symbols = false
    numbers = false
    onlyAlphabet = false
    console.log("is this being called?")
    console.log(allCharacters)
    determineArray()
}


function enterLength() {
 length = parseInt(window. prompt("Enter length: "))
 console.log(length)
 return length
}

function determineArray() {
    if (allCharacters == true) {
        array = characters
    } else if (symbols == true) {
        array = noSymbols
    } else if (numbers == true) {
        array = noNumbers
    } else if (alphabetOnly == true) {
        array = alphabetOnly
    }
    console.log(array)
}

function generatePassword(){
    pw1.textContent = " "
    pw2.textContent = " "
    console.log(array)
    for (i = 0; i < length; i++) {
        randomIndex = Math.floor(Math.random() * array.length)
        randomIndex2 = Math.floor(Math.random() * array.length)
        pw1characters = array[randomIndex]
        pw1.textContent += pw1characters
        pw2characters = array[randomIndex2]
        pw2.textContent += pw2characters
    }

}





//15 characters




//ability to set password length
//copyonclick feature 

//toggle symbols
//toggle numbers