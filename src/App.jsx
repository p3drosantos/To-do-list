 import { useState, useEffect } from 'react';
 import {v4 as uuidv4} from 'uuid'
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import axios from 'axios';

 import styles from './App.module.css'

 import Tasks from './components/Tasks';
 import AddTask from './components/AddTask'
 import Header from './components/Header';
 import TaskDetails from './components/TaskDetails'

function App() {

  const [tasks, setTasks] = useState([
    {
      id : "1",
      title : 'Estudar Programação',
      completed: false
    },
    {
      id : "2",
      title : 'Ler Livro',
      completed: true
    },
  ])

  useEffect(()=>{
    async function fetchTasks(){
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
        )

        
        setTasks(data)
    }
    
   fetchTasks()

  },[])


  function handleTaskAddition(taskTitle){
    const newTask = [
      ...tasks,
      {
        title : taskTitle,
        id : uuidv4(),
        completed : false
      }
    ]

    setTasks(newTask)
  }

  function handleTaskClick(taskId){
    const newTasks = tasks.map((task)=>{
      if(task.id === taskId) return {... task, completed : !task.completed}
      return task
    })

    setTasks(newTasks)
  }

  function handleClickRemove(taskId){
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }


  return (
    <Router>
      <div className={styles.container}>
        <Header/>
        <Routes>
          <Route 
            path='/' 
            exact 
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleClickRemove={handleClickRemove}
              />
              </>
          }/>

           <Route
           path='/:taskTitle'
           element={<TaskDetails/>}
           />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
