function addTask (){

let form = document.getElementById("form");
let inputOne = document.getElementById("input 1").value;
let inputTwo = document.getElementById("input 2").value; 
let notice = document.getElementById("notice"); 
// let tasks = document.getElementById("tasks"); 

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log("button clicked");
    addTask ();
})

let addTask = () =>{
    if (inputOne !== "" && inputTwo !== ""){
         
        notice.innerHTML = "";
        console.log("success");
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
let data = {};
let taskData = ()=> {
    data["text"] = display.value
    console.log (data);
    createPost();
} 

let createPost = () => {
    tasks.innerHTML +=  data.text;
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
    console.log(liEl);

}

