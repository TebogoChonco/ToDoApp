function addTask (){

//let form = document.getElementById("form");
let inputOne = document.getElementById("input 1").value;
let inputTwo = document.getElementById("input 2").value; 
let notice = document.getElementById("notice"); 
// let tasks = document.getElementById("tasks"); 

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log("button clicked");
    //addTask ();
})

let addTask = () =>{
    if (inputOne !== "" && inputTwo !== ""){
        notice.innerHTML = "";
        console.log("success");
        addTask();
        // taskData();
    }
    else if (inputOne === "" && inputTwo !== ""){
        notice.innerHTML = "Please insert all inputs!"
        console.log("fail")
    }
    else if (inputOne !== "" && inputTwo === ""){
        notice.innerHTML = "Please insert all inputs!"
        console.log("fail")
    }
    else{
        notice.innerHTML = "Please insert a task!"
        console.log("fail")
    }
}
/* var display = inputOne + inputTwo;
let liEl = {};
let taskData = ()=> {
    liEl["text"] = display.value
    console.log (liEl);
    createPost();
} 

let createPost = () => {
    tasks.innerHTML +=  liEl.text;
} */

let newTask = [];
newTask.push(
    inputOne,
    inputTwo,
);
let liEl = document.createElement("li");
let theSpan = document.createElement("span");
    let node1 = document.createTextNode(newTask[0] + "  ");
    let node2 = document.createTextNode(newTask[1] + "  ");
    //let node3 = document.createTextNode(newTask[2] + "  ");

    theSpan.appendChild(node1);
    theSpan.appendChild(node2);
   // theSpan.appendChild(node3);

    liEl.appendChild(theSpan);
    document.getElementById("taskList").appendChild(liEl);

    //console.log(newTask);
   // console.log(liEl);

    localStorage.setItem("liEl", JSON.stringify(liEl));

    console.log(liEl);
    addTask();

     //code to add and display the button element 
     const task_completed_el = document.createElement('button');
     task_completed_el.classList.add('completed');
     task_completed_el.innerText = 'Done';
 
 
     const task_edit_el = document.createElement('button');
     task_edit_el.classList.add('edit');
     task_edit_el.innerText = 'Edit';
 
     const task_delete_el = document.createElement('button');
     task_delete_el.classList.add('delete');
     task_delete_el.innerText = 'Delete';
 
     task_actions_el.appendChild(task_edit_el);
     task_actions_el.appendChild(task_completed_el);
     task_actions_el.appendChild(task_delete_el);
 
     task_el.appendChild(task_actions_el);
 
     list_el.appendChild(task_el);
 
     //code to reset the input element 
     input.value = '';
 
     //code to give functionality to the button elements
     task_edit_el.addEventListener('click', (e) => {
       if (task_edit_el.innerText.toLowerCase() == "edit") {
         task_edit_el.innerText = "Save";
         task_input_el.removeAttribute("readonly");
         task_input_el.focus();
       } else {
         task_edit_el.innerText = "Edit";
         task_input_el.setAttribute("readonly", "readonly");
       }
     });
 
     task_completed_el.addEventListener('click', (e) => {
       task_el.classList.toggle("grey-mode");
     });
 
     task_delete_el.addEventListener('click', (e) => {
       list_el.removeChild(task_el);
     });
   }



