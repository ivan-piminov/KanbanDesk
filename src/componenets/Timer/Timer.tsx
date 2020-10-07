import React from "react";


type StateType = {
    count: number
}

type OwnPropsType = {
    totalTime: (id: number, count: number) => void
    id: number
    currentValue: number
}


class Timer extends React.Component<OwnPropsType, StateType> {

    // счетчик для каждой задачи
    state: StateType = {
        count: this.props.currentValue
    };

    componentDidMount(){
        this.countTimers();
    }

    countTimers = (): void => {
        setInterval((): void => {
            this.setState({
                count: this.state.count + 1,
            },  () => {
                this.props.totalTime(this.props.id, this.state.count)
            })
        }, 1000);
    }

    render() {

        let count = this.state.count,
            hours = Math.floor((count % (60 * 60 * 24)) / (60 * 60)),
            minutes = Math.floor((count % (60 * 60)) / 60),
            seconds = Math.floor(count % (60));


        return (
            <div>
                <span>{hours >= 10 ? hours : `0${hours}`}:</span>
                <span>{minutes >= 10 ? minutes : `0${minutes}`}:</span>
                <span>{seconds >= 10 ? seconds : `0${seconds}`}</span>
            </div>

        )
    }
}

export default Timer;