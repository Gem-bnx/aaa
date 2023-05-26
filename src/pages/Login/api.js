import axios from "axios";
export const signUp = async (user) => {
  console.log("signIn");
  const option = {
    method: "POST",
    url: "",
    data: user,
  };
  const response = await axios(option);
  return true;
};
export const login = async (user) => {
  console.log("Login");
  const option = {
    method: "POST",
    url: "https://dever-auth.onrender.com/api/v1/auth/login",
    data: user,
  };
  const response = await axios(option);
  console.log(response);
  return true;
};
export const getUsers = async () => {
  console.log("getUsers");
  const users = await axios
    .get("https://dever-auth.onrender.com/api/v1/get-users/latest")
    .then((response) => {
      console.log(response);
    });
};
