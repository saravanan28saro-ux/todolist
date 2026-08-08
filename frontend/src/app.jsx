
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Headerfile/Header";
import Main from "./components/Maindiv/Main";

import AddTask from "./components/AddTask/AddTask.jsx";

import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "./components/Data/Task";


function App() {

  // Tasks
  const [tasks, setTasks] = useState(
    getTasks()
  );

  // Add/Edit popup
  const [showAddTask, setShowAddTask] =
    useState(false);

  // Task currently being edited
  const [editTask, setEditTask] =
    useState(null);


  // =========================
  // ADD TASK
  // =========================
  const handleAddTask = (task) => {

    addTask(task);

    setTasks(getTasks());

    setShowAddTask(false);

    setEditTask(null);
  };


  // =========================
  // UPDATE TASK
  // =========================
  const handleUpdateTask = (
    id,
    updatedTask
  ) => {

    updateTask(id, updatedTask);

    setTasks(getTasks());

    setShowAddTask(false);

    setEditTask(null);
  };


  // =========================
  // DELETE TASK
  // =========================
  const handleDeleteTask = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
      return;
    }

    deleteTask(id);

    setTasks(getTasks());
  };


  // =========================
  // OPEN EDIT
  // =========================
  const handleEditTask = (task) => {

    setEditTask(task);

    setShowAddTask(true);
  };


  // =========================
  // CLOSE POPUP
  // =========================
  const handleCancel = () => {

    setShowAddTask(false);

    setEditTask(null);
  };


  return (
    <BrowserRouter>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
          width: "100%",
        }}
      >

        {/* HEADER */}
        <Header
          setShowAddTask={setShowAddTask}
        />


        {/* MAIN */}
        <Main
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onUpdateTask={handleUpdateTask}
          onEditTask={handleEditTask}
        />




        {/* ADD / EDIT POPUP */}
        {showAddTask && (
          <AddTask
            editTask={editTask}
            onAddTask={handleAddTask}
            onUpdateTask={handleUpdateTask}
            onCancel={handleCancel}
          />
        )}

      </div>

    </BrowserRouter>
  );
}


export default App;

