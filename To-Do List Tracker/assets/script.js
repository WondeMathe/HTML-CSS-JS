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


// Task tracker
const parent = document.getElementById('parent');
const inputField = document.getElementById('inputTask');

parent.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON'){
        const taskList = document.getElementById('taskList');
        const btn = event.target.textContent;

        if(btn === 'Add'){
            if(inputField.value === ''){
                alert('Task connot be empty')
            } else{
                const newTask = `<li class="list-group-item mb-2 border d-flex justify-content-between align-items-center">${inputTask.value}<button class="remove bg-danger border-0 text-white px-2 py-1 rounded">Delete</button></li>`;
                inputField.value = '';
                taskList.innerHTML += newTask;
            }
        } else if (btn === 'Delete'){
            const li = event.target.closest('li');
            li.remove();
        }
    }
});