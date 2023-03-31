import { useState } from 'react'
import styles from './AddTask.module.css'
import Button from './Button'

function AddTask({handleTaskAddition}){

    const [inputData, setInputData] = useState('')

    function handleChange(e){
        setInputData(e.target.value)
    }

    function handleTaskClick(){
        handleTaskAddition(inputData)
        setInputData('')
    }



    return(
        <div className={styles.add_task_container}>
            <input 
            onChange={handleChange}
            type="text" 
            value={inputData}
            />
            <Button onClick={handleTaskClick} text="Adicionar"/>

        </div>
    )
}

export default AddTask