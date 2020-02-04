const btn=document.getElementById("addBtn")
const tasks=document.getElementById("todo-list")
let tasksArr

if(localStorage.getItem('tasks'))
    tasksArr=JSON.parse(localStorage.getItem('tasks'))
else
    tasksArr=[]

localStorage.setItem('tasks',JSON.stringify(tasksArr))

const removeTask=(e)=>{
    let tgt=e.target
    tasksArr.splice(tasksArr.indexOf(tgt.parentNode.firstChild.innerText),1)
    localStorage.setItem('tasks',JSON.stringify(tasksArr))
    tgt.parentNode.remove(tgt)
}

const newTaskMaker=(task)=>{
    let newTask=document.createElement("li")
    newTask.onclick=removeTask
    newTask.innerHTML=`<span>${task}</span> <button class="delete">Delete</button>`
    tasks.appendChild(newTask)
}

tasksArr.forEach(task=>{
    newTaskMaker(task)
})

const addTask=(e)=>{
        e.preventDefault()
        let task=document.getElementById("task").value
        if(task==="")
            return
        tasksArr.push(task)
        localStorage.setItem('tasks',JSON.stringify(tasksArr))
        newTaskMaker(task)
        document.getElementById("task").value=""
}

btn.addEventListener("click",addTask)






