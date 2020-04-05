let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName =prompt('please enter your name');
    localStorage.setItem('name','myName');
    myHeading.textContent = 'mozaila is cool,'+ myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName =localStorage.getItem('name');
    myHeading.textContent = 'mozaila is cool,'+ myName;
}

myButton.onclick = function()
{
    setUserName();
}


