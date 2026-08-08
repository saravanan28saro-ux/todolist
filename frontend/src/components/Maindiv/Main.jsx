import {
  MainDiv,
  Tittlediv,
  Input,
  SearchBox,
  SearchIcon,
  Carddiv,
  Cardbox,
  Tasklist,
  List,
  TaskInfo,
  TaskDetails,
  Priority,
  Status,
  ActionButton,
} from "./styledcomponents";
import React, { useState } from "react";
import Userdata from "../Data/userdata.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  getCardData,
} from "../Data/Task";


const Main = () => {
    const user=Userdata;
    const Task=getTasks();
    const card=getCardData();
    
    return (
        <MainDiv>
            <Tittlediv>
                <div>
                    <h1 style={{color:"blue",fontWeight:"bold"}}>welcome , {user.name}!</h1>
                    <p>you have {Task.length} tasks today!</p>
                </div>
                <SearchBox>
                    <SearchIcon />
                    <Input type="text" placeholder="Search your task..." />
                </SearchBox>
                </Tittlediv>
            <Carddiv>
                {card.map((item) => (
                    <Cardbox key={item.id} style={{backgroundColor:item.color}}>
                    <h1 style={{fontSize:"30px"}}>{item.name}</h1>
                    <h2>{item.count}</h2>
                    <p>{item.para}</p>
                    </Cardbox>
                ))}
            </Carddiv>
            <Tasklist>
  {Task.map((task) => (
    <List key={task.id}>

      <TaskInfo>
        <h3>{task.taskname}</h3>

        <p>
          <i className="bi bi-calendar3"></i>{" "}
          {task.date} &nbsp; • &nbsp;
          <i className="bi bi-clock"></i>{" "}
          {task.time}
        </p>
      </TaskInfo>

      <TaskDetails>

        <Priority>
          {task.priority}
        </Priority>

        <Status>
          {task.status}
        </Status>

        <ActionButton>
          <i className="bi bi-pencil"></i>
        </ActionButton>

        <ActionButton>
          <i className="bi bi-trash"></i>
        </ActionButton>

      </TaskDetails>

    </List>
  ))}
</Tasklist>
            
        </MainDiv>)};

export default Main;