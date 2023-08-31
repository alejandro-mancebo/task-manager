import { useState } from 'react';
import TaskForm from './components/TaskForm';
import Header from './components/Header';

import './App.css'


interface Tasks {
  id: string;
  title: string;
  dueDate: Date;
  category: string;
}


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <TaskForm />
    </>
  )
}

export default App
