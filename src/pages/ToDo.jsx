import React, { useState } from "react";
import {Input, Button, Spacer} from "@nextui-org/react";
import { TaskCard } from "../components/TaskCard";

export const ToDo = () => {

    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState("");
  
  
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
      </>
    )
}