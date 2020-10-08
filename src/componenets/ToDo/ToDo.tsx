import React, {useState} from "react";
import {TaskType} from "../../types/entities";

type OwnPropsType = {
    toDoTask: Array<TaskType>
    addTaskInProgressStatus: (id: number, taskName: string) => void
    addNewTask: (currentValue:string) => void
}

const ToDo: React.FC<OwnPropsType> = (props) => {

    const [isHiddenNewTask, setStatus] = useState(true);
    const [currentValue, setValue] = useState('');
    const changeValue = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setValue(event.currentTarget.value)
    }


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
            {isHiddenNewTask
              ?  <div>
                    <button type="button" className="btn btn-sm btn-primary" onClick={()=> setStatus(false)}> Новая задача </button>
                </div>
              : <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
                    <div>
                        <textarea placeholder='введите название задачи' style={{width:'250px'}} value={currentValue} onChange={changeValue} ></textarea>
                    </div>
                    <div>
                        <button type="button" className="btn btn-sm btn-primary" onClick={() => {props.addNewTask(currentValue); setStatus(true); setValue('')}}> Добваить задачу </button>
                    </div>
                </div>
            }

            {/*<div>*/}
            {/*    <button type="button" className="btn btn-sm btn-primary" onClick={()=> setStatus(false)}> Новая задача </button>*/}
            {/*</div>*/}


        </div>
    )
}
export default ToDo;
