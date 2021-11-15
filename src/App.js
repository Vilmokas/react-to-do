import React, { useState, useEffect } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  let _task = "";

  return (
    <div>
      {toDoList.map((task) => {
        return (
          <p key={task.task}>
            task: {task.task} | status: {task.status.toString()}
          </p>
        );
      })}
      <form
        onSubmit={() =>
          setToDoList((arr) => [...arr, { task: "test", status: false }])
        }
      >
        <label>
          Name:
          <input type="text" value={_task} onChange={setNewTask(_task)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
