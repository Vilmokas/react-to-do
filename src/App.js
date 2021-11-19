import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <ListGroup>
            {toDoList.map((task, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={8}>
                    task: {task.task} | status: {task.status.toString()}
                  </Col>
                  <Col md={{ span: 3, offset: 1 }}>
                    <Button
                      variant="outline-success"
                      onClick={() => onTaskDone(index)}
                    >
                      ✔️
                    </Button>{" "}
                    <Button
                      variant="outline-danger"
                      onClick={() => onTaskRemove(index)}
                    >
                      ❌
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          {/* <Row className="justify-content-md-center">
            <Col md={{ span: 7, offset: 1 }}> */}
          {/* <form onSubmit={handleSubmit}>
                <label>
                  New Task:
                  <input type="text" value={newTask} onChange={handleChange} />
                </label>{" "}
                <Button variant="outline-success" type="submit" value="Submit">
                  💾
                </Button>
              </form> */}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>New Task:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={newTask}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={{ span: 4, offset: 4 }}>
                <Row>
                  <Button
                    variant="outline-success"
                    type="submit"
                    value="Submit"
                  >
                    💾
                  </Button>
                </Row>
              </Col>
            </Row>
          </Form>
          {/* </Col>
          </Row> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
