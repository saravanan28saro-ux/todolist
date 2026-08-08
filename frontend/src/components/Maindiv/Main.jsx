
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

import React, {
  useState,
} from "react";

import Userdata from "../Data/userdata.jsx";

import {
  useLocation,
} from "react-router-dom";


const Main = ({
  tasks,
  onDeleteTask,
  onUpdateTask,
  onEditTask,
}) => {

  const user = Userdata;

  const location = useLocation();

  const [search, setSearch] =
    useState("");


  // Make sure tasks is always an array
  const Task = tasks || [];


  // =========================
  // HEADER FILTER
  // =========================

  let filteredTasks = Task;


  // My Task
  if (
    location.pathname === "/my-task"
  ) {

    filteredTasks = Task;

  }


  // Completed
  else if (
    location.pathname === "/completed"
  ) {

    filteredTasks = Task.filter(
      (task) =>
        task.status === "Completed"
    );

  }


  // Priority
  else if (
    location.pathname === "/priority"
  ) {

    filteredTasks = Task.filter(
      (task) =>
        task.priority === "High" &&
        task.status !== "Completed"
    );

  }


  // Today
  else if (
    location.pathname === "/today"
  ) {

    const today = new Date()
      .toISOString()
      .split("T")[0];

    filteredTasks = Task.filter(
      (task) =>
        task.date === today
    );

  }


  // Upcoming
  else if (
    location.pathname === "/upcoming"
  ) {

    const today = new Date()
      .toISOString()
      .split("T")[0];

    filteredTasks = Task.filter(
      (task) =>
        task.date > today &&
        task.status !== "Completed"
    );

  }


  // =========================
  // SEARCH
  // =========================

  filteredTasks =
    filteredTasks.filter((task) =>
      task.taskname
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );


  // =========================
  // CARDS
  // =========================

  const card = [

    {
      id: 1,
      name: "Total Tasks",
      count: Task.length,
      para: "All time tasks",
      color: "blue",
    },

    {
      id: 2,
      name: "Pending",
      count: Task.filter(
        (task) =>
          task.status === "Pending"
      ).length,
      para: "Need to complete",
      color: "orange",
    },

    {
      id: 3,
      name: "Completed",
      count: Task.filter(
        (task) =>
          task.status === "Completed"
      ).length,
      para: "Well done",
      color: "green",
    },

    {
      id: 4,
      name: "High Priority",
      count: Task.filter(
        (task) =>
          task.priority === "High" &&
          task.status !== "Completed"
      ).length,
      para: "Needs attention",
      color: "red",
    },

  ];


  // =========================
  // COMPLETE TASK
  // =========================

  const handleStatusClick = (task) => {

    if (
      task.status === "Pending"
    ) {

      onUpdateTask(
        task.id,
        {
          status: "Completed",
        }
      );

    }

  };


  return (

    <MainDiv>


      {/* =========================
          TITLE
      ========================= */}

      <Tittlediv>

        <div>

          <h1
            style={{
              color: "blue",
              fontWeight: "bold",
            }}
          >
            Welcome, {user.name}!
          </h1>

          <p>
            You have{" "}
            {filteredTasks.length}{" "}
            tasks here!
          </p>

        </div>


        {/* SEARCH */}

        <SearchBox>

          <SearchIcon />

          <Input
            type="text"
            placeholder="Search your task..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </SearchBox>

      </Tittlediv>


      {/* =========================
          CARDS
      ========================= */}

      <Carddiv>

        {card.map((item) => (

          <Cardbox
            key={item.id}
            style={{
              backgroundColor:
                item.color,
            }}
          >

            <h1
              style={{
                fontSize: "30px",
              }}
            >
              {item.name}
            </h1>

            <h2>
              {item.count}
            </h2>

            <p>
              {item.para}
            </p>

          </Cardbox>

        ))}

      </Carddiv>


      {/* =========================
          TASK LIST
      ========================= */}

      <Tasklist>

        {filteredTasks.length === 0 ? (

          <p>
            No tasks found.
          </p>

        ) : (

          filteredTasks.map((task) => (

            <List key={task.id}>


              {/* TASK INFO */}

              <TaskInfo>

                <h3>
                  {task.taskname}
                </h3>

                <p>

                  <i className="bi bi-calendar3"></i>{" "}

                  {task.date}

                  &nbsp; • &nbsp;

                  <i className="bi bi-clock"></i>{" "}

                  {task.time}

                </p>

              </TaskInfo>


              {/* TASK DETAILS */}

              <TaskDetails>


                {/* PRIORITY */}

                <Priority>
                  {task.priority}
                </Priority>


                {/* STATUS */}

                <Status
                  onClick={() =>
                    handleStatusClick(
                      task
                    )
                  }
                  style={{
                    cursor:
                      task.status ===
                      "Pending"
                        ? "pointer"
                        : "default",
                  }}
                  title={
                    task.status ===
                    "Pending"
                      ? "Click to complete"
                      : ""
                  }
                >
                  {task.status}
                </Status>


                {/* EDIT */}

                <ActionButton
                  onClick={() =>
                    onEditTask(task)
                  }
                  title="Edit task"
                >
                  <i className="bi bi-pencil"></i>
                </ActionButton>


                {/* DELETE */}

                <ActionButton
                  onClick={() =>
                    onDeleteTask(
                      task.id
                    )
                  }
                  title="Delete task"
                >
                  <i className="bi bi-trash"></i>
                </ActionButton>

              </TaskDetails>

            </List>

          ))

        )}

      </Tasklist>

    </MainDiv>
  );
};


export default Main;

