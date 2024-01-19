// make sure password contains uppercase, lowercase, special characters, and numbers

const isValidPassword = (password) => {
  if (password.length < 8) {
    console.error("Password must be 8 or more characters");
    return false;
  }

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_chars = "!@#$%^&*()_";
  const numbers = "1234567890";

  if (!password.includes(lowercase)) {
    console.error("Password must contain at least 1 lowercase letter");
    return false;
  }

  if (!password.includes(uppercase)) {
    console.error("Password must contain at least 1 capital letter");
    return false;
  }

  if (!password.includes(numbers)) {
    console.error("Password must contain at least 1 number");
    return false;
  }

  if (!password.includes(special_chars)) {
    console.error(
      "Password must contain at least 1 special character" +
        ": " +
        special_chars
    );
    return false;
  }

  return true;
};

module.export = {
  isValidPassword,
};
