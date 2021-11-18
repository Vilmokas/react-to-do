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

  const onTaskDone = (i) => {
    let tasks = [...toDoList];
    let task = { ...tasks[i] };
    task.status = true;
    tasks[i] = task;
    setToDoList([...tasks]);
  };

  const onTaskRemove = (i) => {
    let tasks = [...toDoList];
    tasks.splice(i, 1);
    setToDoList([...tasks]);
  };

  return (
    <div>
      {toDoList.map((task, index) => (
        <p key={index}>
          task: {task.task} | status: {task.status.toString()}
          <button onClick={() => onTaskDone(index)}>✔️</button>
          <button onClick={() => onTaskRemove(index)}>❌</button>
        </p>
      ))}
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
