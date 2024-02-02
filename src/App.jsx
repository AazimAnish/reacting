import React, { useEffect, useState } from "react";
import {Input, Button, Spacer, Card, CardBody} from "@nextui-org/react";
import "./App.css"
import { TaskCard } from "./components/Taskcard";
import Axios from "axios";


export default function App() {

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setFact(res.data.fact);
    });
  } 


  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [fact, setFact] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
    };
    setToDoList([...toDoList, task]);
  }

  const removeTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id != id));
  };

  return (
    <>
      <div className="App">

        <div>
          <Input onChange={handleChange} type="text" label="ToDo" />
          <Spacer y={2} />
          <Button onClick={addTask} color="primary">Add Task</Button>
        </div>

        <div>
          {toDoList.map((task) => (
            <TaskCard key={task.id} removeTask={removeTask} taskName={task.taskName} id={task.id} />
          ))}
        </div>

      </div>

      <div className="p-4 flex flex-col gap-4">
        <Card>
          <CardBody>
            <p>{fact}</p>
          </CardBody>
        </Card>
      </div>
      <Button className="text-tiny" variant="ghost" color="primary" radius="lg" onClick={fetchFact}>Next</Button>

    </>
  );
}
