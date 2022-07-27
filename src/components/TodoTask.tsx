import { Task } from '../types'

type Props = {
  task: Task,
  completedTask(taskNameToDelete:string):void
}

const TodoTask = ({ task , completedTask}: Props) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{task.taskName}</span>
        <span>{task.deadline} day(s)</span>
      </div>
      <button onClick={() => completedTask(task.taskName)}>X</button>
    </div>
  )
}

export default TodoTask
