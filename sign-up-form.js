let buttonSubmit = document.querySelector(".submitBtn")
buttonSubmit.addEventListener("click", validatePassword);
let error = document.querySelector(".error");

function validatePassword () {
    let passwordEntry1 = document.getElementById("Password1").value;
    let passwordEntry2 = document.getElementById("Password2").value;
    if (passwordEntry1 !=0 && passwordEntry1 == passwordEntry2) {
        console.log("passwords match")
        error.innerHTML = "";
    }

    else if (passwordEntry1 == 0) {        
        error.innerHTML = "password must not be empty";
    }
    else {
        error.innerHTML = "passwords must match";
    }
}
