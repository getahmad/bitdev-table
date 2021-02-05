import { useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./register.module.css";
import Cookies from "js-cookie";
import axios from "axios";

const Register = () => {
  const [nama, setnama] = useState("");
  const [email, setemail] = useState("");
  const [notelp, setnotelp] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const url = "https://601b8cde59fa2c0017560c6a.mockapi.io/Users";
    const bodyData = {
      nama: nama,
      email: email,
      no_telepon: notelp,
      password: password,
    };
    axios.post(url, bodyData).then((res) => {
      console.log(res.data);
      Cookies.set("id", res.data.id);
      Cookies.set("nama", res.data.nama);
      Cookies.set("email", res.data.email);
      Cookies.set("token", res.data.token);
      history.push("/");
      setLoading(false);
    });
  };

  return (
    <div className={style.container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Nama</label>
        <br />
        <input type="text" onChange={(e) => setnama(e.target.value)} required />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <br />
        <label>Nomor telepon</label>
        <br />
        <input
          type="number"
          onChange={(e) => setnotelp(e.target.value)}
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
        <button type="submit"> {loading ? "Loading..." : "Register"} </button>
      </form>
      <a href="/">
        <button>Back</button>
      </a>
      <br />
      <a href="/login">
        punya akun? <span>Login</span>
      </a>
    </div>
  );
};

export default Register;
