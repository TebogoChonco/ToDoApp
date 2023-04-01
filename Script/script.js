function addTask() {
//code to invoke the functions
  let form = document.getElementById("form");
  let inputOne = document.getElementById("input 1").value;
  let inputTwo = document.getElementById("input 2").value;
  let notice = document.getElementById("notice");
  // let tasks = document.getElementById("tasks"); 

//code to prefent the page from refreshing everytime the button is clicked
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    addTask();
  })

  //the setup for my function using the else if statement
  let addTask = () => {
    if (inputOne !== "" && inputTwo !== "") {

      notice.innerHTML = "";
      console.log("success");
      // taskData();
 
      //code to create the task elements
      let newTask = [];
      newTask.push(
        inputOne,
        inputTwo,
      );
      let liEl = document.createElement("li");
      let theSpan = document.createElement("span");
      let node1 = document.createTextNode(newTask[0] + "  ");
      //let node2 = document.createTextNode(newTask[1] + "  ");
      //let node3 = document.createTextNode(newTask[2] + "  ");

      theSpan.appendChild(node1);
     // theSpan.appendChild(node2);
      // theSpan.appendChild(node3);

      liEl.appendChild(theSpan);
      document.getElementById("taskList").appendChild(liEl);

      // console.log(newTask);
      console.log(liEl);

    //code to add the action buttons with each task element
      const myButtons =
        `
          <input name="q" hidden value="${newTask}"></input>
          <button type="radio" id="complete" >Completed</button>
          <button type="submit" id="edit" >Edit</button>
          <button type="submit" onClick="deleteTask(this)">Delete</button>
          `
      document.getElementById("taskList").innerHTML += myButtons;
      console.log(liEl);

    }
    else if (inputOne === "" && inputTwo !== "") {
      notice.innerHTML = "Please insert all inputs!"
      console.log("fail")
    }
    else if (inputOne !== "" && inputTwo === "") {
      notice.innerHTML = "Please insert all inputs!"
      console.log("fail")
    }
    else {
      notice.innerHTML = "Please insert a task!"
      console.log("fail")
    }

}}


//code to give the delete button its function
let deleteTask = (e) => {
  e.parentElement.parentElement.remove();

} 