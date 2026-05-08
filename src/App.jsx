import { useState } from "react";

import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";
import TaskInput from "./components/TaskInput";
import TodoList from "./components/TodoList";

function App() {

 const [tasks, setTasks] = useState([
  {
    text: "Complete React JSX notes",
    completed: false,
  },
  {
    text: "Practice Components & Props",
    completed: false,
  }
]);

  const [input, setInput] = useState("");

  // ADD TASK
  const addTask = () => {

  if(input.trim() === "") return;

  const newTask = {
    text: input,
    completed: false,
  };

  setTasks([...tasks, newTask]);

  setInput("");
};

  // DELETE TASK
  const deleteTask = (indexValue) => {

    const updatedTasks = tasks.filter(
      (_, index) => index !== indexValue
    );

    setTasks(updatedTasks);
  };

  return (

    <div className="container">

      {/* TITLE */}

      <div className="title">

        <h1>🚀 MINI PROJECT: 📋 Smart Student Task Manager</h1>

        <p>Built using React + Vite</p>

      </div>

      {/* MAIN DASHBOARD */}

      <div className="dashboard">

        {/* LEFT SIDE */}

        <div className="left-side">

          <ProfileCard />

          <Counter />

        </div>

        {/* RIGHT SIDE */}

        <div className="right-side">

          <h2>Task Management Area</h2>

          <TaskInput
            input={input}
            setInput={setInput}
            addTask={addTask}
          />

          <TodoList
  tasks={tasks}
  setTasks={setTasks}
  deleteTask={deleteTask}
/>
          {/* CONDITIONAL RENDERING */}

          <div className="condition-box">

            <h3>Conditional Rendering</h3>

            {
              tasks.length === 0
              ?
              <p>No tasks available 🎉</p>
              :
              <p>{tasks.length} Tasks Available ✅</p>
            }

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="footer">

        Built with <span>Phase 1 topics</span>

      </div>

    </div>
  );
}

export default App;