

const getStoredTasks = () => {
  const storedTasks = localStorage.getItem("tasks");

  if (storedTasks) {
    return JSON.parse(storedTasks);
  }

  // Initial tasks
  const defaultTasks = [
    {
      id: 1,
      taskname: "Write the homework",
      date: "2026-08-10",
      time: "10:00",
      priority: "High",
      status: "Completed",
    },
    {
      id: 2,
      taskname: "Read the book",
      date: "2026-08-11",
      time: "14:00",
      priority: "High",
      status: "Completed",
    },
    {
      id: 3,
      taskname: "Learn React",
      date: "2026-08-12",
      time: "17:00",
      priority: "Low",
      status: "Pending",
    },
  ];

  localStorage.setItem(
    "tasks",
    JSON.stringify(defaultTasks)
  );

  return defaultTasks;
};



const saveTasks = (tasks) => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
};


// Get all tasks
export const getTasks = () => {
  return getStoredTasks();
};



export const addTask = (task) => {
  const tasks = getStoredTasks();

  const newTask = {
    id: Date.now(),
    ...task,
  };

  const updatedTasks = [
    ...tasks,
    newTask,
  ];

  saveTasks(updatedTasks);

  return newTask;
};


// Update task
export const updateTask = (
  id,
  updatedTask
) => {
  const tasks = getStoredTasks();

  const updatedTasks = tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          ...updatedTask,
        }
      : task
  );

  saveTasks(updatedTasks);

  return updatedTasks;
};


// Delete permanently
export const deleteTask = (id) => {
  const tasks = getStoredTasks();

  const updatedTasks = tasks.filter(
    (task) => task.id !== id
  );

  saveTasks(updatedTasks);

  return updatedTasks;
};


// Dashboard cards
export const getCardData = () => {
  const tasks = getStoredTasks();

  return [
    {
      id: 1,
      name: "Total Tasks",
      count: tasks.length,
      para: "All time tasks",
      color: "blue",
    },
    {
      id: 2,
      name: "Pending",
      count: tasks.filter(
        (task) => task.status === "Pending"
      ).length,
      para: "Need to complete",
      color: "orange",
    },
    {
      id: 3,
      name: "Completed",
      count: tasks.filter(
        (task) => task.status === "Completed"
      ).length,
      para: "Well done",
      color: "green",
    },
    {
      id: 4,
      name: "High Priority",
      count: tasks.filter(
        (task) =>
          task.priority === "High" &&
          task.status !== "Completed"
      ).length,
      para: "Needs attention",
      color: "red",
    },
  ];
};

