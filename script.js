// regform
const form = document.getElementById("regf");
const fname = document.getElementById("firstname");
const lname=  document.getElementById("lastname");
const email = document.getElementById("mail");
const password = document.getElementById("pass");
const confirmpass = document.getElementById("confirm_pass");

const emailError = document.getElementById("emailError");
const passError = document.getElementById("passwordError");
const con_passError = document.getElementById("confirmPasswordError");
const showpass= document.getElementById("togglePassword");


const bar=document.getElementById(strbar);


form.addEventListener('submit', function (e) {
    if(!email.validity.valid || !password.validity.valid || !confirmpass.validity.valid || !fname.validity.valid || !lname.validity.valid)
        e.preventDefault();
    else{
        alert("Registration successfull");
    }
});

//for fname

// });


// for email
function showError(email) {
    if (email.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
}

email.addEventListener("input", () => {
    if (email.validity.valid) {
        emailError.textContent = ""; // Reset the content of the message
        emailError.className = "error"; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError(email);
    }
});


// for password
function showError_pass(password) {
    if (password.validity.valueMissing) {
        passError.textContent = "You need to enter a password.";
    }
    else if (password.validity.tooShort) {
        passError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    }
}

password.addEventListener("input", () => {
    if (password.validity.valid) {
        passError.textContent = ""; // Reset the content of the message
        passError.className = "error"; // Reset the visual state of the message
    } 
    else {
        // If there is still an error, show the correct error
        showError_pass(password);
    }
});


showpass.addEventListener("change",()=>{
    if (showpass.checked) {
        password.type='text';}
    else{
        password.type='password';
    }
});


// for confirm password
confirmpass.addEventListener("input",()=>{
    if (confirmpass.value===password.value) {
        con_passError.textContent = "ok now"; 
        con_passError.className = "error";
    } 
    else {
        con_passError.textContent = "Password is not same.";
    }
});


// -----------------------------------------------------------------
// for landing (carousel)

let image = document.getElementsByClassName("images");
let slider= document.getElementsByClassName("slider");
let lefts= document.querySelector(".left");
let rights= document.querySelector(".right");
var  slideIndex = 0;
var j;
auto();
// console.log(image.length);

function auto() {
    let i;
    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    if (slideIndex >= image.length) 
        {slideIndex = 0;}
    // console.log(slideIndex);
    image[slideIndex].style.display = "flex";
    slideIndex++;
    setTimeout(auto, 3000) // Change image every 2 seconds and timeout is used as recurse here
}

document.addEventListener('DOMContentLoaded', function() {

    rights.addEventListener("click",()=>{
        j = slideIndex;
        image[j-1].style.display = "none";
        if (slideIndex >= image.length) 
            {slideIndex = 0;}
        image[slideIndex].style.display = "flex";
        console.log(j);
    });

    lefts.addEventListener("click",()=>{

        j = slideIndex;
        image[j-1].style.display = "none";
        if (slideIndex <1) 
            {slideIndex = 3;}
        image[slideIndex-2].style.display = "flex";
        console.log(j);
    });
});

// left.addEventListener("click",buttons(-1));

// function buttons(posi) {
//     slideIndex +=posi;
//     j=slideIndex;
//     image[j].style.display = "none";
//     image[slideIndex].style.display = "flex";
// }

// function currentSlide(index) {
//     if (index > slides.length) {index = 1}
//     else if(index < 1){index = slides.length}
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//         slides[index-1].style.display = "block";  
//         dots[index-1].className += " active";
//     }


// -----------------------------------------------------------------------
// for star rating
//on index.htm
