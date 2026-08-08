const USERS_KEY = "users";
const CURRENT_USER_KEY = "loggedInUser";

export const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);

  return users ? JSON.parse(users) : [];
};

export const signupUser = (user) => {
  const users = getUsers();

  const existingUser = users.find(
    (item) => item.email.toLowerCase() === user.email.toLowerCase()
  );

  if (existingUser) {
    return {
      success: false,
      message: "Email already registered.",
    };
  }

  const newUser = {
    id: Date.now(),
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    password: user.password,
  };

  const updatedUsers = [...users, newUser];

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(updatedUsers)
  );

  return {
    success: true,
    user: newUser,
  };
};

export const loginUser = (email, password) => {
  const users = getUsers();

  const user = users.find(
    (item) =>
      item.email.toLowerCase() === email.toLowerCase() &&
      item.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  const loggedInUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    mobile: user.mobile,
  };

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(loggedInUser)
  );

  return {
    success: true,
    user: loggedInUser,
  };
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY);

  return user ? JSON.parse(user) : null;
};

export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const isLoggedIn = () => {
  return localStorage.getItem(CURRENT_USER_KEY) !== null;
};