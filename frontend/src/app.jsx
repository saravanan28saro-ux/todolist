
import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Headerfile/Header";
import Main from "./components/Maindiv/Main";
import AddTask from "./components/AddTask/AddTask.jsx";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "./components/Data/Task";

import { isLoggedIn } from "./components/Data/auth";


// ============================
// DASHBOARD
// ============================

function Dashboard() {

  const [tasks, setTasks] = useState(getTasks());

  const [showAddTask, setShowAddTask] =
    useState(false);

  const [editTask, setEditTask] =
    useState(null);


  // ============================
  // ADD TASK
  // ============================

  const handleAddTask = (task) => {

    addTask(task);

    setTasks(getTasks());

    setShowAddTask(false);

    setEditTask(null);
  };


  // ============================
  // UPDATE TASK
  // ============================

  const handleUpdateTask = (id, updatedTask) => {

    updateTask(id, updatedTask);

    setTasks(getTasks());

    setShowAddTask(false);

    setEditTask(null);
  };


  // ============================
  // DELETE TASK
  // ============================

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


  // ============================
  // EDIT TASK
  // ============================

  const handleEditTask = (task) => {

    setEditTask(task);

    setShowAddTask(true);
  };


  // ============================
  // CANCEL
  // ============================

  const handleCancel = () => {

    setShowAddTask(false);

    setEditTask(null);
  };


  return (

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        width: "100%",
      }}
    >

      <Header
        setShowAddTask={setShowAddTask}
      />


      <Main
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
        onEditTask={handleEditTask}
      />


      {showAddTask && (

        <AddTask
          editTask={editTask}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          onCancel={handleCancel}
        />

      )}

    </div>
  );
}


// ============================
// PROTECTED ROUTE
// ============================

const ProtectedRoute = ({ children }) => {

  if (!isLoggedIn()) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
};


// ============================
// PUBLIC ROUTE
// ============================

const PublicRoute = ({ children }) => {

  if (isLoggedIn()) {

    return (
      <Navigate
        to="/my-task"
        replace
      />
    );
  }

  return children;
};


// ============================
// APP
// ============================

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />


        {/* SIGNUP */}

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />


        {/* DASHBOARD */}

        <Route
          path="/my-task"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* ANY UNKNOWN URL */}

        <Route
          path="*"
          element={
            <Navigate
              to={
                isLoggedIn()
                  ? "/my-task"
                  : "/login"
              }
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;

