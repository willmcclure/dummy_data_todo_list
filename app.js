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

let userTodos = []

// let completedTodos = []

// let incompletedTodos = []

console.log('userId', arrayOfTodos[0] .userId)

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => {
      arrayOfTodos = json;
      userTodos = json;
      }
      )
  }

const logTodos = () => {
    console.log(arrayOfTodos)
  }

const populateTodos = () => {
    userTodos = arrayOfTodos;
    document.getElementById("complete-list").innerHTML = "";
    document.getElementById("listTwo").innerHTML = "";
    document.getElementById("listOne").innerHTML = "All Todos";
    // access the ol tag to insert list items
    var ol = document.getElementById('todo-list')
  
    // loop through array to populate dom with each items title
    for (let i = 0; i < arrayOfTodos.length; i++) {
    
      let listItem = document.createElement("li")
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

const removeTodos = () => {
    document.getElementById("todo-list").innerHTML = "";
    document.getElementById("complete-list").innerHTML = "";
    document.getElementById("listOne").innerHTML = "";
    document.getElementById("listTwo").innerHTML = "";
  }

const populateUserSelection = () => {
    document.getElementById("complete-list").innerHTML = "";
    document.getElementById("todo-list").innerHTML = "";
    document.getElementById("listTwo").innerHTML = "";
    document.getElementById("listOne").innerHTML = "User's Todos";
    const ol = document.getElementById('todo-list');
    const id = document.getElementById('userSelection').value;
    userTodos = arrayOfTodos.filter(todo => todo.userId === Number(id));
  
    userTodos.map(todo => {
      const listItem = document.createElement("li")
      const listItemText = document.createTextNode(todo.title);
      listItem.appendChild(listItemText)
      ol.appendChild(listItem)
    });
    return;
  }

const completedTodos = () => {
    document.getElementById("complete-list").innerHTML = "";
    document.getElementById("todo-list").innerHTML = "";
    document.getElementById("listOne").innerHTML = "";
    document.getElementById("listTwo").innerHTML = "Completed Todos";
    const ol = document.getElementById('complete-list');
    completeTodos = userTodos.filter((todo) => todo.completed);
  
    console.log(completeTodos)
    completeTodos.map(todo => {
      const listItem = document.createElement("li")
      const listItemText = document.createTextNode(todo.title);
      listItem.appendChild(listItemText)
      ol.appendChild(listItem)
    });
    return;
}

const incompletedTodos = () => {
    // document.getElementById("complete-list").innerHTML = "";
    document.getElementById("listOne").innerHTML = "Incomplete Todos";
    const ol = document.getElementById('todo-list');
    notCompleteTodos = userTodos.filter((todo) => !todo.completed)
  
    console.log(notCompleteTodos)
    notCompleteTodos.map(todo => {
      const listItem = document.createElement("li")
      const listItemText = document.createTextNode(todo.title);
      listItem.appendChild(listItemText)
      ol.appendChild(listItem)
    });
    return;

}

const sort = () => {
  completedTodos();
  incompletedTodos();
}
