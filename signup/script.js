//Input fiels
const fistName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');

//Form
const form = document.getElementById('myForm');

//Handle Form
form.addEventListener('submit', function(event){
    event.preventDefault();
    
});

//Validation colors
const greed = '#4CAF50';
const red   = '#F44336';
undefined
function validateFirstName(){
    //Check is empty
    if(checkIfEmpty(fistName))return;
        else
    //check if it only has letters
    if(!checkIfOnlyLetters(firstName))return;
    return true;
}

function validateLastName(){
    //Check is empty
    if(checkIfEmpty(lastName))return;
        else
    //check if it only has letters
    if(!checkIfOnlyLetters(lastName))return;
    return true;
}

function validatePassword(){
    //Check is empty
    if(checkIfEmpty(password))return "valid";

    //Must have certain length
    if(!meetLength(password, 8,20))return;

    //Atleast 1 Uppercase, 1 lowercase, 1 number, 1 character
    if(!containsCharacters(password, 4))return;
    return true;
}

function validateConfirmPassword(){
    // Check is empty
    if(checkIfEmpty(confirmPassword)  ){
        // setInvalid(confirmPassword, 'password must not be empty');
        return 'password must not be empty';
    }else {
        if(password.value !== confirmPassword.value){
        setInvalid(confirmPassword, 'password must match');
        // return  'password must match';
    }else {
        // setValid(confirmPassword, 'valid');
        return 'valid';
    }
}
    return true;
}

//check if email is valid
function validateEmail(){
    if(!containsCharacters(email, 5)){
        setInvalid(email,'must be a valid email');
        return;
    }else{
    setValid(email, 'valid');
        return;
    }
}

function checkIfEmpty(field){
    if(isEmpty(field.value.trim())){
        setInvalid(field, `${field.name} must not be empty`)
        return;
    }else{
        setValid(field, 'Valid');
        return true;
    }
}

function setInvalid(field, message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}
function setValid(field, message){
    field.className = 'valid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = green;
    }

function isEmpty(value){
    if(value === '')return true;
    return false;
} 

function checkIfOnlyLetters(field){
    if(/[a-zA-Z]/.test(field.value)){
        setValid(field, 'Valid');
        return true;
    }else{
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}

 function meetLength(field, minLength, maxLength){
     if(field.value.length >=minLength && field.value.length<=maxLength){
         setValid(field, 'valid');
         return true;
     }else if(field.value.length<minLength){
         setInvalid(field, `${field.name} must be atleast ${minLength} characters long`);
     return false;
    }else if(field.value.length>maxLength) {
        setInvalid(field, `${field.name} must be shorter than ${maxLength} characters`);
        return false;
    }
 }

 function containsCharacters(field, code ){
     let regEx;
     switch(code){
         case 1: 
         //letters
         regEx = /(?=.*[a-zA-Z])/;
         return matchWithRegEx(regEx, field, 'Must contain atleast 1 letter');

         case 2:
             //letters & numbers
             regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
             return matchWithRegEx(regEx, field, 'must contain atlease 1 letter and 1 number');

         case 3:
             //Uppercase, lowercase, number
             regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
             return matchWithRegEx(regEx, field, 'must contain a lowercase, uppercase and a number');

         case 4:
             //Uppercase , lowercase, number, special character
             regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
             return matchWithRegEx(regEx, field, 'must have stuff');

         case 5: 
         //email
         regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return matchWithRegEx(regEx, field, 'valid');  

         default: return false;
     }
 }

 function matchWithRegEx(regEx, field, message){
    if(field.value.match(regEx)){
        setValid(field, message);
        return false;
    }else{
        setInvalid(field,message );
        return;
    }
 }