import {MainDiv,Tittlediv,Input,SearchBox, SearchIcon,Carddiv,Cardbox} from "./styledcomponents";
import React, { useState } from "react";
import Userdata from "../Data/userdata.jsx";
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
        </MainDiv>)};

export default Main;