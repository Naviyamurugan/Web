import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

const [tasks,setTasks]=useState([])
const [title,setTitle]=useState("")
const [description,setDescription]=useState("")

const API="http://127.0.0.1:8000/api"

useEffect(()=>{
fetchTasks()
},[])

const fetchTasks=()=>{
axios.get(`${API}/tasks/`)
.then(res=>setTasks(res.data))
}

const addTask=()=>{
axios.post(`${API}/add/`,{
title:title,
description:description,
status:"Pending"
}).then(()=>{
fetchTasks()
})
}

const deleteTask=(id)=>{
axios.delete(`${API}/delete/${id}/`)
.then(()=>fetchTasks())
}

return (

<div style={{padding:"20px"}}>

<h2>Task Manager</h2>

<input
placeholder="Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
/>

<button onClick={addTask}>Add Task</button>

<hr/>

{tasks.map(task=>(
<div key={task.id}>

<h3>{task.title}</h3>
<p>{task.description}</p>
<p>Status: {task.status}</p>

<button onClick={()=>deleteTask(task.id)}>
Delete
</button>

</div>
))}

</div>
)
}

export default App