import React from "react";
import {TaskType} from "../../types/entities";

type OwnPropsType = {
    tasksDone: Array<TaskType>
}

export const Done:React.FC<OwnPropsType> = (props) => {

    //map-им все задачи в статусе Done для дальнейшей отрисовки
    const allTasks = props.tasksDone.map(task => <div key={task.id}
        style={{
            border: '1px solid black',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 5px'
        }}>
            <div>
                {task.taskName}
            </div>
            <div>
                <b> Стоимость: {task.price} руб.</b>
            </div>
        </div>
    )

    return (
        <div className = "container" style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>{allTasks}</div>
    )
}

export default Done;