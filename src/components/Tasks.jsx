import React from "react"

import Task from "./Task"

function Tasks({ tasks, handleTaskClick, handleClickRemove }){
    return(
        <>
        {tasks.map((task) => (
        <Task key={task.id} handleClickRemove={handleClickRemove} handleTaskClick={handleTaskClick} task={task}/>))}
        </>
    )
}

export default Tasks