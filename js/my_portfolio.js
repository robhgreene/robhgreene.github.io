//  open the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// close the contact form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    // takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    let slides = document.getElementsByClassName("mySlides");
    // takes all elements with the class name "dot" and stores them in the variable array "dots" 
    let dots = document.getElementsByClassName("dot");
    // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1 
    if (n > slides.length) {slideIndex = 1};
    // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides" 
    if (n < 1) {slideIndex = slides.length};
    // This for loop takes each item in the array "slides" and sets the display to none 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    // loop takes each item in the array "dots" and removes "active" which removes the active styling
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }
    // displays the image in the slideshow
    slides[slideIndex - 1].style.display = "block";
    // adds the active styling to the dot associated with the image 
    dots[slideIndex - 1].className += " active"; 
}

// checks input validation for phone number
// uses a RegEx to search 
function validatePhoneNum(inputTxt) {
    var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputTxt.value.match(phoneNo)){
        return true;
    } else {
        alert("Phone number should be XXX-XXX-XXXX");
        return false;
    }
}

// checks input validation for only letters in name
// uses a RegEx to check for only upper and lower case characters
// will allow for either a first name or a first and last name.
function validateName(inputTxt) {
    var letters = /^[A-Za-z]+\s?[A-Za-z]+?$/;
    if (inputTxt.value.match(letters)) {
        return true;
    } else {
        alert("Please enter only letters for the name.");
        return false;
    }
}

// checks input validation for correct email format
// uses RegEx to to check for all valid characters followed by @ and than a valid subdomain and domain
function validateEmail(emailInput) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value.match(emailFormat)) {
        return true;
    } else {
        alert("Please enter a valid email address.")
        return false;
    }
}

// checks input validation for message
// uses RegEx to search for common characters in cross-site scripting attacks
function validateMessage(messageInput) {
    var xxsChars = /^[^#%^&<>[\]+={}]+$/;
    if (messageInput.value.match(xxsChars)) {
        return true;
    } else {
        alert("You trying to do an XSS attack?")
        return false;
    }
}

// checks input validation for the from. Will not Submit a form with any empty fields
function validateForm() {
    let x = document.forms["ContactForm"]["Name","Email","Phone Number", "Message"].value;
    if (x == "") {
      alert("All fields must be filled out.");
      return false;
    }
    if (validatePhoneNum(document.forms["ContactForm"]["Phone Number"])) {

    } else {
        return false;
    }
    if (validateName(document.forms["ContactForm"]["Name"])) {

    } else {
        return false;
    }
    if (validateEmail(document.forms["ContactForm"]["Email"])) {

    } else {
        return false;
    }
    if (validateMessage(document.forms["ContactForm"]["Message"])) {
        
    } else {
        return false;
    }
}

// provides functionality for the fade in effect for all elements
document.body.classList.add('fade-out');
            window.addEventListener('DOMContentLoaded', () => {
            document.body.classList.remove('fade-out');
});