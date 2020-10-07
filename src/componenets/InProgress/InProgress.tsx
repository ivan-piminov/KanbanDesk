import React from "react";
import Timer from "../Timer/Timer";
import {TaskType} from "../../types/entities";

type OwnPropsType = {
    tasksInProgress: Array<TaskType>
    sendTaskToDone: (id: number, taskName: string, count: number) => void
    counter: (id: number, count: number) => void
}

const InProgress: React.FC<OwnPropsType> = (props) => {

    //map-им все задачи в статусе InProgress для дальнейшей отрисовки
    const allTasks = props.tasksInProgress.map(task => <div
        style={{
            border: '1px solid black',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 5px'
        }}
        key={task.id}>
        {task.taskName}
        <Timer id={task.id} currentValue={task.count} totalTime={props.counter}/>
        <button type="button" className="btn btn-sm btn-info mb-2"
                onClick={() => props.sendTaskToDone(task.id, task.taskName, task.count)}> Завершить
        </button>
    </div>)
    return (
        <div className="container" style={{
            borderRight: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>{allTasks}</div>
    )
}

export default InProgress;