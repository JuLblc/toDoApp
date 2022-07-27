import { FC, ChangeEvent, useState } from 'react'
import './App.css'
import { Task } from './types'
import TodoTask from './components/TodoTask'

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<Task[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
      return
    }

    if (event.target.name === 'deadline') {
      setDeadline(Number(event.target.value))
      return
    }
  }

  const addTask = (): void => {
    
    const newTask: Task = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask])
    setTask('')
    setDeadline(0)
  }

  const completedTask = (taskNameToDelete:string):void => {

    const newTodoList: Task[] = [...todoList]

    newTodoList.map((task, idx)=>{
      if (task.taskName === taskNameToDelete){
        newTodoList.splice(idx, 1)
      }
    })

    setTodoList(newTodoList)
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Task...'
            name='task'
            onChange={handleChange}
            value={task}
          />
          <input
            type='number'
            placeholder='Deadline (in Days)...'
            name='deadline'
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: Task) => (
          <TodoTask key={task.taskName} task={task} completedTask={completedTask}/>
        ))}
      </div>
    </div>
  )
}

export default App
