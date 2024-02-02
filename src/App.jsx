import React, { useEffect, useState } from "react";
import {Input, Button, Spacer, Card, CardBody} from "@nextui-org/react";
import "./App.css"
import { TaskCard } from "./components/Taskcard";
import Axios from "axios";


export default function App() {

  useEffect(() => {
    fetchFact();
    fetchExcuse();
  }, []);
  
  const fetchExcuse = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  }
  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setFact(res.data.fact);
    });
  } 

  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [fact, setFact] = useState("");
  const [excuse, setExcuse] = useState("");

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

      <div className="p-4 grid grid-col gap-4">
        <Card>
          <CardBody>
            <p>{fact}</p>
          </CardBody>
        </Card>
      </div>
      <Button className="text-tiny" variant="ghost" color="primary" radius="lg" onClick={fetchFact}>Next</Button>

      <div className="p-4 grid grid-col gap-4">
        <Card>
          <CardBody>
            <p>{excuse}</p>
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-10 ">
  <Button className="text-tiny col-start-2 col-span-2" variant="ghost" color="primary" radius="lg" onClick={() => fetchExcuse('developers')}>Developer</Button>
  <Button className="text-tiny col-start-5 col-span-2" variant="ghost" color="primary" radius="lg" onClick={() => fetchExcuse('family')}>Family</Button>
  <Button className="text-tiny col-start-8 col-span-2" variant="ghost" color="primary" radius="lg" onClick={() => fetchExcuse('office')}>Office</Button>
</div>
    </>
  );8
}
