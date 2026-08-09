
const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";


export const getUsers = () => {
  const data = localStorage.getItem(USERS_KEY);

  if (!data) {
    return [];
  }

  try {
    const users = JSON.parse(data);
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
};


export const signupUser = ({
  name,
  email,
  mobile,
  password,
}) => {
  const users = getUsers();

  const cleanEmail = String(email)
    .trim()
    .toLowerCase();

  const existingUser = users.find(
    (user) =>
      String(user.email)
        .trim()
        .toLowerCase() === cleanEmail
  );

  if (existingUser) {
    return {
      success: false,
      message: "Email already registered.",
    };
  }

  const newUser = {
    id: Date.now(),
    name: String(name).trim(),
    email: cleanEmail,
    mobile: String(mobile),
    password: String(password),
  };

  users.push(newUser);

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

  return {
    success: true,
    user: newUser,
  };
};


export const loginUser = ({
  email,
  password,
}) => {
  const users = getUsers();

  const cleanEmail = String(email)
    .trim()
    .toLowerCase();

  const cleanPassword = String(password);

  const user = users.find((user) => {
    const storedEmail = String(user.email)
      .trim()
      .toLowerCase();

    const storedPassword = String(
      user.password
    );

    return (
      storedEmail === cleanEmail &&
      storedPassword === cleanPassword
    );
  });

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(user)
  );

  return {
    success: true,
    user,
  };
};


export const getCurrentUser = () => {
  const data = localStorage.getItem(
    CURRENT_USER_KEY
  );

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};


export const logoutUser = () => {
  localStorage.removeItem(
    CURRENT_USER_KEY
  );
};


export const isLoggedIn = () => {
  return Boolean(
    localStorage.getItem(
      CURRENT_USER_KEY
    )
  );
};

