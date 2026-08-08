let taskList = [
  {
    id: 1,
    taskname: "Write the homework",
    date: "2024-06-10",
    time: "10:00 AM",
    priority: "High",
    status: "Completed",
  },
  {
    id: 2,
    taskname: "Read the book",
    date: "2024-06-11",
    time: "2:00 PM",
    priority: "High",
    status: "Completed",
  },
];

// Get all tasks
export const getTasks = () => {
  return taskList;
};

// Add a task
export const addTask = (task) => {
  taskList.push({
    id: Date.now(),
    ...task,
  });
};

// Update a task
export const updateTask = (id, updatedTask) => {
  taskList = taskList.map((task) =>
    task.id === id ? { ...task, ...updatedTask } : task
  );
};

// Delete a task
export const deleteTask = (id) => {
  taskList = taskList.filter((task) => task.id !== id);
};

// Dashboard card data
export const getCardData = () => {
  return [
    {
      id: 1,
      name: "Total Tasks",
      count: taskList.length,
      para: "All time tasks",
      color: "blue",
    },
    {
      id: 2,
      name: "Pending",
      count: taskList.filter(
        (task) => task.status === "Pending"
      ).length,
      para: "Need to complete",
      color: "orange",
    },
    {
      id: 3,
      name: "Completed",
      count: taskList.filter(
        (task) => task.status === "Completed"
      ).length,
      para: "Well done",
      color: "green",
    },
    {
      id: 4,
      name: "High Priority",
      count: taskList.filter(
        (task) =>
          task.priority === "High" &&
          task.status !== "Completed"
      ).length,
      para: "Needs attention",
      color: "red",
    },
  ];
};