import { useNavigate, useParams } from "react-router-dom"


import styles from './TaskDetails.module.css'

import Button from "./Button"

function TaskDetails(){

    const params = useParams()
    const navigate = useNavigate()

    function handleBackButtonClick(){
        navigate(-1)
    }


    return(
        <>
            <div className={styles.task_button}> 
                <Button onClick={handleBackButtonClick} text="Voltar"/>
            </div>
            <div className={styles.task_details}>
                <h2>
                    {params.taskTitle}
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam debitis omnis vitae pariatur! Quisquam, magni?
                </p>
            </div>
        </>
    )
}

export default TaskDetails

