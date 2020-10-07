
export type TaskType = {
    id: number
    taskName: string
    count?: any // при подстановке типа number TS ругается, так и не понял почему, поэтому пока оставил "костыль" для работоспособности приложения
    price?: number
}