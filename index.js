const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1El = document.getElementById('password1-el');
let password2El = document.getElementById('password2-el');
let userInputEl = document.getElementById('user-input');
let setInputEl = document.getElementById('set-input');
let passwordLength = "";


function passwordGenerator(number){
    let password = "";
    for(let i =0; i < number; i++){
        password+= characters[Math.floor(Math.random()*characters.length)];
    }
    return password;
}

function showPasswords(){
    
    let pw1 = passwordGenerator(getInput());
    let pw2 = passwordGenerator(getInput());
    
    password1El.textContent = pw1;
    password1El.value =pw1;
    password2El.textContent = pw2;
    password2El.value = pw2;
}

function getInput(){
    if(userInputEl.value > 1){
        passwordLength = userInputEl.value;
        return passwordLength;
    } else {
        passwordLength = 15;
        return passwordLength;
    }
    
}

function copyPassword1() {
   let copyText = password1El
    copyText.select()
    document.execCommand('copy')
    copyText.value = "Copied!"
    
}
function copyPassword2() {
   let copyText = password2El
    copyText.select()
    document.execCommand('copy')
    copyText.value = "Copied!"
    
}








