import { useState } from "react";

function TodoList({ tasks, setTasks, deleteTask }) {

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // TOGGLE COMPLETE

  const toggleComplete = (index) => {

    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  // START EDIT

  const startEdit = (index, text) => {

    setEditIndex(index);

    setEditText(text);
  };

  // SAVE EDIT

  const saveEdit = (index) => {

    const updatedTasks = [...tasks];

    updatedTasks[index].text = editText;

    setTasks(updatedTasks);

    setEditIndex(null);

    setEditText("");
  };

  return (

    <div className="todo-box">

      <h3>Todo List (.map())</h3>

      {
        tasks.map((task, index) => (

          <div className="task" key={index}>

            <div className="task-left">

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
              />

              {
                editIndex === index
                ?
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                :
                <p
                  className={
                    task.completed
                    ? "completed-task"
                    : ""
                  }
                >
                  {task.text}
                </p>
              }

            </div>

            <div className="task-buttons">

              {
                editIndex === index
                ?
                <button
                  className="save-btn"
                  onClick={() => saveEdit(index)}
                >
                  💾
                </button>
                :
                <button
                  className="edit-btn"
                  onClick={() =>
                    startEdit(index, task.text)
                  }
                >
                  ✏️
                </button>
              }

              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                ❌
              </button>

            </div>

          </div>
        ))
      }

    </div>
  );
}

export default TodoList;