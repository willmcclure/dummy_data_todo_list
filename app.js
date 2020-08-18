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
      let complete = arrayOfTodos[i].completed
      console.log('complete', arrayOfTodos[i], complete)
      // created listItem
      var listItem = document.createElement("li"); 
      // get array item title
      const elementTitle = arrayOfTodos[i].title
      // created text to go inside <li> text </li>
      var listItemText = document.createTextNode(elementTitle); 
  
      // appended the text to the listItem
      listItem.appendChild(listItemText);
  
      // append to <ol> <li> Hi there and greetings! </li> </ol>
      ol.appendChild(listItem)
    }
    //  if (complete.every(true)) {
    //   console.log("Austin, TX")
      // document.querySelector("li").style.color = "blue";
      // } else if (completed.every(false))
      // document.querySelector("li").style.color = "red";
      // if (complete == false) {
      // document.querySelector("li").style.color = "red";
      }

const topTwenty = () => {
  var ol = document.getElementById('todo-list')
  
  // loop through array to populate dom with each items title
  for (let i = 0; i < arrayOfTodos.slice(19); i++) {
    let complete = arrayOfTodos[i].completed
    console.log('complete', arrayOfTodos[i], complete)
    // created listItem
    var listItem = document.createElement("li"); 
    // get array item title
    const elementTitle = arrayOfTodos[i].title
    // created text to go inside <li> text </li>
    var listItemText = document.createTextNode(elementTitle); 

    // appended the text to the listItem
    listItem.appendChild(listItemText);

    // append to <ol> <li> Hi there and greetings! </li> </ol>
    ol.appendChild(listItem)
  }

      console.log(arrayOfTodos.slice(0, 19)) 
}