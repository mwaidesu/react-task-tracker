import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


function App() {


  const [tasks, setTasks] = useState([{
    id: 1,
    text: "Reply all pending Emails",
    day: "Monday 8:00 a.m",
    reminder: false,
  },
  {
    id: 2,
    text: "Have lunch with Daisy",
    day: "Monday 12:30 a.m",
    reminder: true,
  },
  {
    id: 3,
    text: "Buy a suit",
    day: "Tuesday 11:00pm",
    reminder: true,
  },
])

  //add Task

  const addTask = (task) =>{
    //console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1;
    //console.log(id)

    const newTask = { id, ...task}
    setTasks([...tasks, newTask])

  }


  ///Delete Task

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder

  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:
          !task.reminder
      } : task)
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd = {addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("No Tasks To Show")}
    </div>
  );
}

export default App;
