import { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import { TaskList } from './components/TaskList';
import Task from './types/Task';

import './App.css'


function App() {

  const storageTasks: string | null = localStorage.getItem('task');

  let languages: Task[] | [];

  if (storageTasks) {
    languages = JSON.parse(storageTasks);
  } else {
    languages = [];
  }

  const [taskList, setTaskList] = useState<Task[]>(languages);


  useEffect(() => {
    if (taskList.length > 0) {
      console.log('task List', taskList)
      localStorage.setItem("task", JSON.stringify(taskList));
    } else {
      localStorage.clear();
    }
  }, [taskList]);


  const handleAddTask = (data: Omit<Task, 'id'>) => {
    const id = crypto.randomUUID()
    const newData: Task = { id: id, title: data.title, dueDate: data.dueDate, category: data.category }
    setTaskList([...taskList, newData])
  };


  const handleDeleteTask = (index: number) => {
    if (index > -1) {
      taskList.splice(index, 1);
    }
    setTaskList([...taskList])
    console.log(taskList)
  }


  return (
    <>
      <Header />
      <TaskForm onSubmit={handleAddTask} />
      <TaskList taskList={taskList} onDelete={handleDeleteTask} />
    </>
  );
};

export default App
