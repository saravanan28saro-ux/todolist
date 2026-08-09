
import React, {useEffect,useState} from "react";

import {AddTaskContainer,AddTaskForm,FormTitle,FormGroup,Label,
  Input,Select,ButtonGroup,SubmitButton,CancelButton,} from "./styledcomponents";


const AddTask = ({editTask,onAddTask,onUpdateTask,onCancel}) => {

  const [task, setTask] =
      useState({
        taskname: "",
        date: "",
        time: "",
        priority: "Low",
        status: "Pending",
      });


  
  useEffect(() => {

    if (editTask) {

      setTask({
        taskname:
          editTask.taskname || "",

        date:
          editTask.date || "",

        time:
          editTask.time || "",

        priority:
          editTask.priority || "Low",

        status:
          editTask.status || "Pending",
      });

    } else {

      setTask({
        taskname: "",
        date: "",
        time: "",
        priority: "Low",
        status: "Pending",
      });

    }

  }, [editTask]);


  
  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target;

    setTask((previousTask) => ({
      ...previousTask,
      [name]: value,
    }));

  };


  
  const handleSubmit = (e) => {

    e.preventDefault();


    if (
      !task.taskname ||
      !task.date ||
      !task.time
    ) {

      alert(
        "Please fill all required fields."
      );

      return;
    }


    
    if (editTask) {

      onUpdateTask(
        editTask.id,
        task
      );

    }

    
    else {

      onAddTask(task);

    }

  };


  return (

    <AddTaskContainer>

      <AddTaskForm onSubmit={handleSubmit}>

        <FormTitle>{editTask ? "Edit Task" : "Add New Task"}</FormTitle>

        <FormGroup>
          <Label>Task Name</Label>

          <Input
            type="text"
            name="taskname"
            placeholder="Enter your task..."
            value={task.taskname}
            onChange={handleChange}
          />

        </FormGroup>

        <FormGroup>
          <Label>Date</Label>

          <Input
            type="date"
            name="date"
            value={task.date}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Time</Label>

          <Input
            type="time"
            name="time"
            value={task.time}
            onChange={handleChange}
          />

        </FormGroup>

        <FormGroup>
          <Label>Priority</Label>

          <Select
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >

            <option value="Low">Low</option>

            <option value="Medium">Medium</option>

            <option value="High">High</option>

          </Select>

        </FormGroup>


        

        <FormGroup>

          <Label>Status</Label>

          <Select
            name="status"
            value={task.status}
            onChange={handleChange}
          >

            <option value="Pending">Pending</option>

            <option value="Completed">Completed</option>

          </Select>

        </FormGroup>


        

        <ButtonGroup>

          <CancelButton type="button" onClick={onCancel}> Cancel</CancelButton>
          
          <SubmitButton type="submit">

            <i
              className={
                editTask
                  ? "bi bi-check-circle"
                  : "bi bi-plus-circle"
              }
            ></i>

            {" "}

            {editTask
              ? "Update Task"
              : "Add Task"}

          </SubmitButton>

        </ButtonGroup>

      </AddTaskForm>

    </AddTaskContainer>

  );
};


export default AddTask;

