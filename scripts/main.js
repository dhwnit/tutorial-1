/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'absolut breaking news';
let myVariable = 100;
myVariable;

let x = 7;
console.log (x === 6);

let HollandMouth = 'default';
if(HollandMouth === 'closed') {
  //alert('Thank God! He was silent');
  console.log ('mouth was shut');
} else {
  //alert('Damn! He does it again!');
  console.log ('!@#%^%#@');
}

function mul(num1,num2,num3) {
    let result = (num1 * num2 + num3);
    return result;
}

document.querySelector('img').onclick = function() {
    alert('surprise he did not tell');
}
*/


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tom-1.jpg') {
      myImage.setAttribute('src','images/tom-2.jpg');
    } else {
      myImage.setAttribute('src','images/tom-1.jpg');
    }
}
let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
  }  
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Breaking News\! ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Breaking News\! ' + storedName;
  }
  
  
  








