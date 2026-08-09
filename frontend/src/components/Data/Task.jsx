
const getCurrentUser = () => {
  const data = localStorage.getItem(
    "currentUser"
  );

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};

const getStoredTasks = () => {

  const storedTasks =
    localStorage.getItem("tasks");


  if (storedTasks) {

    try {

      const tasks = JSON.parse(
        storedTasks
      );

      return Array.isArray(tasks)
        ? tasks
        : [];

    } catch (error) {

      return [];

    }
  }


  const defaultTasks = [];

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


export const getTasks = () => {

  const currentUser =
    getCurrentUser();

  if (!currentUser) {
    return [];
  }


  const tasks =
    getStoredTasks();


  return tasks.filter(
    (task) =>
      String(task.userId) ===
      String(currentUser.id)
  );

};


export const addTask = (task) => {

  const currentUser =
    getCurrentUser();


  if (!currentUser) {

    return null;

  }


  const tasks =
    getStoredTasks();


  const newTask = {

    id: Date.now(),

    userId: currentUser.id,

    ...task,

  };


  const updatedTasks = [

    ...tasks,

    newTask,

  ];


  saveTasks(
    updatedTasks
  );


  return newTask;

};



export const updateTask = (
  id,
  updatedTask
) => {

  const currentUser =
    getCurrentUser();


  if (!currentUser) {

    return [];

  }


  const tasks =
    getStoredTasks();


  const updatedTasks =
    tasks.map((task) => {

      if (
        task.id === id &&
        String(task.userId) ===
          String(currentUser.id)
      ) {

        return {

          ...task,

          ...updatedTask,

        };

      }


      return task;

    });


  saveTasks(
    updatedTasks
  );


  return updatedTasks.filter(
    (task) =>
      String(task.userId) ===
      String(currentUser.id)
  );

};


export const deleteTask = (
  id
) => {

  const currentUser =
    getCurrentUser();


  if (!currentUser) {

    return [];

  }


  const tasks =
    getStoredTasks();


  const updatedTasks =
    tasks.filter(
      (task) =>
        !(
          task.id === id &&
          String(task.userId) ===
            String(currentUser.id)
        )
    );


  saveTasks(
    updatedTasks
  );


  return updatedTasks.filter(
    (task) =>
      String(task.userId) ===
      String(currentUser.id)
  );

};


export const getCardData = () => {

  const tasks =
    getTasks();


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
        (task) =>
          task.status ===
          "Pending"
      ).length,

      para: "Need to complete",

      color: "orange",
    },


    {
      id: 3,

      name: "Completed",

      count: tasks.filter(
        (task) =>
          task.status ===
          "Completed"
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
          task.status !==
            "Completed"
      ).length,

      para: "Needs attention",

      color: "red",
    },

  ];

};

