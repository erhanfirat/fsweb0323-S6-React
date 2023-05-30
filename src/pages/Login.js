import { useState } from "react";
import { axiosInstance, updateToken } from "../endpoints/api";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = () => {
    axiosInstance
      .post("login", user)
      // https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/login
      .then((res) => {
        updateToken(res.data.token);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <h1>Login Page</h1>
      <hr />
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="pass"
        value={user.pass}
        onChange={changeHandler}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
