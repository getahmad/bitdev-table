import { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import style from "./login.module.css";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const url = "https://601b8cde59fa2c0017560c6a.mockapi.io/Users";
    const bodyData = {
      email: email,
      password: password,
    };
    axios.post(url, bodyData).then((res) => {
      console.log(res.data);
      Cookies.set("id", res.data.id);
      Cookies.set("email", res.data.email);
      Cookies.set("token", res.data.token);
      history.push("/");
      setLoading(false);
    });
  };

  return (
    <div className={style.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <br />
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">{loading ? "Loading..." : "Login"}</button>
      </form>
      <a href="/">
        <button>Back</button>
      </a>
      <br />
      <a href="/register">
        belum punya akun? <span>Register</span>
      </a>
    </div>
  );
};

export default Login;
