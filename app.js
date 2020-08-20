let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

console.log('userId', arrayOfTodos[0] .userId)

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

const logTodos = () => {
    console.log(arrayOfTodos)
  }

const populateTodos = () => {
    // access the ol tag to insert list items
    var ol = document.getElementById('todo-list')
  
    // loop through array to populate dom with each items title
    for (let i = 0; i < arrayOfTodos.length; i++) {
    
      let listItem = document.createElement("li"); 
      // get array item title
      const elementTitle = arrayOfTodos[i].title
      // created text to go inside <li> text </li>
      var listItemText = document.createTextNode(elementTitle); 
  
      // appended the text to the listItem
      listItem.appendChild(listItemText);
  
      // append to <ol> <li> Hi there and greetings! </li> </ol>
      ol.appendChild(listItem)
    }
  }
  
const populateUserSelction = () => {
  const inputElement = document.getElementsByTagName('userId')
  let inputValue = inputElement.inputValue

  // clear array
  // filter out the userid of the number in the input 
  todoByUserId = arrayOfTodos.filter(todo => {
    console.log('todo:', todo.userId)
  })
}

const removeTodos = () => {
  document.getElementById("todo-list").innerHTML = "";
}