//Creating Regex values to be used for validation
var alphaOnlyReg = /^[a-zA-Z]+$/;
var alphaNumReg = /^[a-zA-Z0-9_\s]+$/;
var emailReg = /\S+@\S+\.\S+/;
var zipReg = /\d{5}/;
var phoneReg = /\d{7}/;
var areaReg = /\d{3}/;

//Creating constants from the HTML document IDs
const reset = document.getElementById("reset");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const address = document.getElementById("address");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const areaCode = document.getElementById("areacode");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const confirm = document.getElementById("confirm");
const state = document.getElementById("state");
const meal = document.getElementById("meal");
const form = document.getElementById("form");
const error = document.getElementById("error");



form.addEventListener('submit', (e) => { //runs on submit
    
    let errorMessage = [] //Will store messages for invalid input fields
    if (alphaOnlyReg.test(firstName.value) == false){  //If the first name doesn't meet the regex requirement
        errorMessage.push('First name required') //adds error message 
    }

    if (alphaOnlyReg.test(lastName.value) == false){  //If the last name doesn't meet the regex requirement
        errorMessage.push('Last name required') //adds error message 
    }
    if (alphaNumReg.test(address.value) == false){  //If the address doesn't meet the regex requirement
    errorMessage.push('Address required') //adds error message 
    }
    if (alphaOnlyReg.test(city.value) == false){  //If the city doesn't meet the regex requirement
    errorMessage.push('City required') //adds error message 
    }
    if (zipReg.test(zip.value) == false){  //If the zip code doesn't meet the regex requirement
    errorMessage.push('Zip code required') //adds error message 
    }
    if (areaReg.test(areaCode.value) == false){  //If the area code doesn't meet the regex requirement
    errorMessage.push('Valid area code required') //adds error message 
    }
    if (phoneReg.test(phone.value) == false){  //If the phone number doesn't meet the regex requirement
    errorMessage.push('Valid phone number required') //adds error message 
    }
    if (emailReg.test(email.value) == false){  //If the email doesn't meet the regex requirement
    errorMessage.push('Valid Email required') //adds error message 
    }
    if (confirm.value !== email.value){  //If the email confirmation does not equal first email
    errorMessage.push('Emails must match') //adds error message 
    }
    if (state.value == 0){  //If state dropdown is still on empty value
    errorMessage.push('Please select a state') //adds error message 
    }
    if (meal.value == 0){  //If meal option is still on empty value
    errorMessage.push('Please select a meal option') //adds error message 
    }  

    if ((form.contact[0].checked == false) && (form.contact[1].checked == false)){  //I wasn't sure exactly how to get this one
    //I knew since I only had three checkboxes and at least two would have to be checked, I could pick any two and make sure at least one was checked
    //knowing the third would be have to be checked also
    errorMessage.push('Please select at least two contact methods') //adds error message 
    }

    if (errorMessage.length > 0){ //if 1 or more error messages are present
    e.preventDefault(); //Prevents submit
    error.innerText = errorMessage.join(',  ') //Prints all error messages to error div
    }
    else{
    form.submit()
    console.log("form submitted");
    }
});

//Rest buttons clears form at click
reset.addEventListener("click", function(){
    inputs.reset();
});

