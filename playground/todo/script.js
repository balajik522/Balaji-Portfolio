const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
const taskCount=document.getElementById("taskCount");

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

renderTasks();

function addTask(){

    const text=taskInput.value.trim();

    if(text==="") return;

    tasks.push({

        text:text,

        completed:false

    });

    taskInput.value="";

    saveTasks();

}

function renderTasks(){

    taskList.innerHTML="";

    tasks.forEach((task,index)=>{

        const li=document.createElement("li");

        if(task.completed){

            li.classList.add("completed");

        }

        li.innerHTML=`

            <span class="task">${task.text}</span>

            <i class="fas fa-trash delete"></i>

        `;

        li.querySelector(".task").onclick=()=>{

            tasks[index].completed=!tasks[index].completed;

            saveTasks();

        };

        li.querySelector(".delete").onclick=()=>{

            tasks.splice(index,1);

            saveTasks();

        };

        taskList.appendChild(li);

    });

    taskCount.textContent=`${tasks.length} Task${tasks.length!=1?"s":""}`;

}

function clearCompleted(){

    tasks=tasks.filter(task=>!task.completed);

    saveTasks();

}

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

    renderTasks();

}

taskInput.addEventListener("keypress",e=>{

    if(e.key==="Enter"){

        addTask();

    }

});