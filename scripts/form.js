document.querySelector("#contact-button").addEventListener("click", function (event) {
    event.preventDefault();
    const firstName = firstNameValidate();
    const lastName = lastNameValidate();
    const phoneNo = numValidate();
    const emailId = emailValidate();
    const subj = subjectValidate();
    const dOB = dobValidate();
    const companyName = document.getElementById('cname').value;
    if (firstName && lastName && phoneNo && emailId && subj && dOB) {
    let reqObj;
       reqObj = {firstName, lastName, phoneNo, emailId, subj, dOB, companyName};
       console.log(reqObj);
    }
});


/*function nameValidate() {
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const fnameError = document.getElementById('fname-error');
    const lnameError = document.getElementById('lname-error');
    const nameFormat = /^[A-Za-z][A-Za-z\s]{3,10}$/;
    if(firstName == "") {
        fnameError.innerHTML = "* Please enter the name field";
        return false;
    } 
    else if(lastName == "") {
        lnameError.innerHTML = "* Please enter the name field";
        return false;
    }
    else if (firstName.length <= 2 || firstName.length >= 10) {
        fnameError.innerHTML = "* Required character length is between 2 and 10";
        return false;
    }
    else if (lastName.length >= 15) {
        lnameError.innerHTML = "* Required character length is less than 15";
        return false;
    }
    else if (firstName.match(nameFormat)){
        fnameError.innerHTML = ""; 
       // return firstName;
    } 
    else if (lastName.match(nameFormat)){
        lnameError.innerHTML = "";
      //  return lastName;
    }
    else {
        fnameError.innerHTML = "* Please enter a valid name";
        lnameError.innerHTML = "* Please enter a valid name";
        return false;
    }   
    return [firstName, lastName];  
}*/


const nameFormat = /^[A-Za-z][A-Za-z\s]{3,10}$/;
function firstNameValidate() {
    const firstName = document.getElementById('fname').value;
    const fnameError = document.getElementById('fname-error');
    if(firstName == "") {
        fnameError.innerHTML = "* Please fill the first name field";
        return false;
    }
    else if(firstName.length <= 2) {
        fnameError.innerHTML = "* Please enter a valid name";
        return false;
    }
    else if(firstName.length >= 10) {
        fnameError.innerHTML = "* First name shouldn't exceed 10 characters"; 
        return false;
    }
    else if (firstName.match(nameFormat)){
        fnameError.innerHTML = ""; 
        return firstName;
    } 
    else {
        fnameError.innerHTML = "* Please enter a valid name";
        return false;
    }     
}

function lastNameValidate() {
    const lastName = document.getElementById('lname').value;
    const lnameError = document.getElementById('lname-error');
    if(lastName == "") {
        lnameError.innerHTML = "* Please fill the last name field";
        return false;
    }
    else if(lastName.length >= 15) {
        lnameError.innerHTML = "* Last name shouldn't exceed 15 characters";
        return false; 
    }
    else if (lastName.match(nameFormat)){
        lnameError.innerHTML = ""; 
        return lastName;
    } 
    else {
        lnameError.innerHTML = "* Please enter a valid name";
    }     
        
}

function numValidate() {
    const number = document.getElementById('num').value;
    const numError = document.getElementById('num-error');
    const phoneNoFormat = /^[1-9][0-9]{9}$/;
    if (number.match(phoneNoFormat)) {
        numError.innerHTML = " ";
        return number;
    } else {
        numError.innerHTML = "* Enter a valid phone number with 10 digits";
        return false;
    }
}

function emailValidate() {
    const email = document.getElementById('mail').value;
    const emailError = document.getElementById('mail-error');
    const mailFormat = /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
    if (email.match(mailFormat)) { 
        emailError.innerHTML = " ";
        return email;
    }
     else {
        emailError.innerHTML = "* Please enter a valid email id";
        return false;
    }    
}

function subjectValidate() {
    const sub = document.getElementById('subject').value;
    const subError = document.getElementById('subject-error');
    if (sub == "" || sub.length < 3) {
        subError.innerHTML = "* Please enter a valid subject";
        return false;
    }
    else {
        subError.innerHTML = "";
        return sub;
    }
}

function dobValidate() {
    const dateOfBirth = document.getElementById('DoB').value;
    const dobError = document.getElementById('dob-error');
    const DOB = new Date(dateOfBirth);
    const today = new Date();
    let tyear = today.getFullYear();
    let dyear = DOB.getFullYear();
    let age = tyear - dyear;
    if (dateOfBirth == "") {
        dobError.innerHTML = "* Please enter the date of birth";
        return false;
    } else  {
        if (DOB > today) {
            dobError.innerHTML = "* Invalid DOB";
            return false;
        }
        else if (age < 18) {
            dobError.innerHTML = "* Age should be greater than 18";
            return false;
        }
        else  {
            dobError.innerHTML ="";
        }
    }
    return dateOfBirth;  
}


