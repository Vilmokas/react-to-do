import React, { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setToDoList((arr) => [...arr, { task: newTask, status: false }]);
    setNewTask("");
  }

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  return (
    <div>
      {toDoList.map((task) => {
        return (
          <p key={task.task}>
            task: {task.task} | status: {task.status.toString()}
          </p>
        );
      })}
      <form onSubmit={handleSubmit}>
        <label>
          New Task:
          <input type="text" value={newTask} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
