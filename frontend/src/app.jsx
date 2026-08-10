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

import  {isLoggedIn}  from "./components/Data/Auth.jsx";


function Dashboard() {

  const [tasks, setTasks] = useState(() => getTasks());

  const [showAddTask, setShowAddTask] = useState(false);

  const [editTask, setEditTask] = useState(null);


  const handleAddTask = (task) => {

    addTask(task);

    setTasks(getTasks());

    setShowAddTask(false);

    setEditTask(null);
  };


  const handleUpdateTask = (id, updatedTask) => {

    updateTask(id, updatedTask);

    setTasks(getTasks());

    setShowAddTask(false);

    setEditTask(null);
  };


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


  const handleEditTask = (task) => {

    setEditTask(task);

    setShowAddTask(true);
  };


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


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-task"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/today"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upcoming"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/completed"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/priority"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;