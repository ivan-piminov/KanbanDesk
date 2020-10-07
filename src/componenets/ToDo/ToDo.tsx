import React from "react";
import {TaskType} from "../../types/entities";

type OwnPropsType = {
    toDoTask: Array<TaskType>
    addTaskInProgressStatus: (id: number, taskName: string) => void
    addNewTask: () => void
}

const ToDo: React.FC<OwnPropsType> = (props) => {

    //map-им все задачи в статусе ToDO для дальнейшей отрисовки
    const allTasks = props.toDoTask.map(task => <div
        style={{border: '1px solid black', margin: '10px', display:'flex', flexDirection:'column', alignItems: 'center', padding:'0 5px'}}
        key={task.id}>{task.taskName}
        <div>
            <button type="button" className="btn btn-sm btn-success mb-2 mt-3"
                    onClick={() => props.addTaskInProgressStatus(task.id, task.taskName)}> Начать
            </button>
        </div>
    </div>)
    return (
        <div className="container" style={{borderRight: '1px solid black', display:'flex', flexDirection:'column', alignItems: 'center'}}>
            <div >{allTasks}</div>
            <div>
                <button type="button" className="btn btn-sm btn-primary" onClick={props.addNewTask}> Новая задача </button>
            </div>
        </div>
    )
}
export default ToDo;
