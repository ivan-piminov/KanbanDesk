import React from 'react';
import ToDo from "./componenets/ToDo/ToDo";
import InProgress from "./componenets/InProgress/InProgress";
import Done from "./componenets/Done/Done";
import {TaskType} from "./types/entities";

type StateType = {
    tasksTodo: Array<TaskType>,
    tasksInProgress: Array<TaskType>,
    tasksDone: Array<TaskType>,
}

class App extends React.Component {

    // локальный state всего приложения
    state: StateType = {
        tasksTodo: [
            {id: Math.random(), taskName: 'искать работу'},
            {id: Math.random(), taskName: 'активнее искать работу'},
            {id: Math.random(), taskName: 'еще более активно искать работу'}
        ],

        tasksInProgress: [],

        tasksDone: []
    }

    // функция по сохранению изменений в state в localStorage
    saveState = (): void => {
        localStorage.setItem("our-state", JSON.stringify(this.state))
    };

    // восстановление state из localStorage
    restoreState = (): void => {
        let stateAsString = localStorage.getItem("our-state");
        if (stateAsString) {
            let state = JSON.parse(stateAsString);
            this.setState(state)
        }
    };

    componentDidMount(): void {
        this.restoreState();
    }

    addNewTask = (task: string) => {
        if (task) {
            this.setState({
                tasksTodo: [...this.state.tasksTodo, {
                    id: (Math.random()).toFixed(4),
                    taskName: task
                }]
            }, (): void => {
                this.saveState()
            })
        } else {
            alert('Введено пустое значение')
        }
    }

    // функция по переносу задачи в раздел InProgress
    addTaskInProgressStatus = (id: number, task: string): void => {
        this.setState({
            tasksTodo: this.state.tasksTodo.filter(task => task.id !== id),
            tasksInProgress: [...this.state.tasksInProgress, {id: id, taskName: task, count: 0}]
        }, (): void => {
            this.saveState()
        })
    }

    // функция по переносу задачи в раздел Done
    sendTaskToDone = (id: number, task: string, count = 0): void => {
        const price = 1000; // стоимость часа работ
        this.setState({
            tasksInProgress: this.state.tasksInProgress.filter(task => task.id !== id),
            tasksDone: [...this.state.tasksDone, {id: id, taskName: task, price: ((count / 3600) * price).toFixed(2)}]
        }, (): void => {
            this.saveState()
        })
    }

    // функция по сохранению времени, в течении которого выполняется задача
    counter = (id: number, count: number) => {
        this.saveState();
        this.state.tasksInProgress.forEach((item) => {
            if (item.id === id) {
                item.count = count
            }
        })
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    borderBottom: '1px solid black',
                    margin: '5px 0 5px 0',
                    paddingBottom: '10px'
                }}>
                    <div><b>ToDo</b></div>
                    <div><b>InProgress</b></div>
                    <div><b>Done</b></div>

                </div>
                <div className="container-fluid d-flex justify-content-around mt-2">

                    <ToDo toDoTask={this.state.tasksTodo} addNewTask={this.addNewTask}
                          addTaskInProgressStatus={this.addTaskInProgressStatus}/>
                    <InProgress tasksInProgress={this.state.tasksInProgress} sendTaskToDone={this.sendTaskToDone}
                                counter={this.counter}/>
                    <Done tasksDone={this.state.tasksDone}/>

                </div>
            </div>
        );
    }
}

export default App;
