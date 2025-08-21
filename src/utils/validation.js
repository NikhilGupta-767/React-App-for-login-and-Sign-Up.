export const validateName = (name) =>
  /^[A-Za-z ]+$/.test(name) ? '' : 'Only alphabets allowed.';

export const validateUsername = (username) =>
  /^[A-Za-z0-9@._-]+$/.test(username) ? '' : 'Invalid username format.';

export const validatePassword = (password, username) => {
  if (password === username) return "Password can't be same as username.";
  return /^[A-Za-z0-9@._-]+$/.test(password) ? '' : 'Invalid password format.';
};

export const validateConfirmPassword = (confirm, password) =>
  confirm === password ? '' : 'Passwords do not match.';

export const validateEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@gmail.com$/.test(email) ? '' : 'Invalid Gmail address.';

export const validatePhone = (phone) =>
  /^\+\d{1,3}\d{10}$/.test(phone) ? '' : 'Phone must include country code and must be of 10 digits';
