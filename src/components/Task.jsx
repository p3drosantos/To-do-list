import { useNavigate } from 'react-router-dom'
import styles from './Task.module.css'
import {FiX, FiInfo} from 'react-icons/fi'

function Task({task, handleTaskClick, handleClickRemove}){

    const navigate = useNavigate()

    function handleTaskDetails(){
        navigate (`/${task.title}`)
    }

    return(
        <div className={styles.task_container} style={task.completed ? {borderLeft:'6px solid chartreuse'} : {}}>

            <div className={styles.task} onClick={()=>handleTaskClick(task.id)}>
                
             {task.title}
            </div>

            <div className={styles.icons_container}>
                <div>
                <FiInfo onClick={handleTaskDetails} className={styles.details}/>
                <FiX onClick={()=>handleClickRemove(task.id)} className={styles.icon}/>
                </div>
                
            </div>

        </div>
        
        // <div className={styles.task_container}>
        //     {task.name}         
        // </div>
    )
}

export default Task