const subInput = document.querySelector('#sub-input');
const mottoTxt = document.querySelector('#demo');

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("orangè")) {
        image.src = "headie.jpg";
    } else {
        image.src = "orangè.jpg";
    }
}
//setTimeout(() => {
 // document.location.reload();
//}, 6000);
 
 alert('welcome to the world of leg-beautifying footies ');

function subButton(){
 const subBtn = subInput.value;
 
 if(!subBtn){
   alert("please input a functioning or working Email")
   return;
 }
}

function subButton(email) {
  // Regular expression pattern for email validation
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Check if the email matches the pattern
  if (pattern.test(email)) {
    return true; // Valid email
  } else {
    return false; // Invalid email
  }
}

// Usage example
//var email = "example@example.com";
//if (validateEmail(email)) {
//  console.log("Email is valid.");
//} else {
 // console.log("Email is invalid.");
//)}
//


