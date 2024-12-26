// Calculator
const container = document.getElementById("container");
const userInput = document.getElementById("inputField");

let currentValue = '';

container.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log('button');
    const button = event.target.textContent;
    console.log(button);
    if(button === '='){
        if(currentValue === ''){
            alert('Please enter number!')
        } else{
          currentValue = eval(currentValue);
        }
    } else if(button ==='reset'){
        currentValue = '';
    } else if(button === 'delete'){
        currentValue = currentValue.slice(0,-1);     
    } else {
        currentValue += button;
    }
  }
  userInput.value = currentValue;
});
