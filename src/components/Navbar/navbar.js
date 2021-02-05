import style from "./navbar.module.css";
import { checkLogin } from "../../Helper";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [result, setResult] = useState([]);
  let history = useHistory();

  const handlerSubmit = (e) => {
    e.preventDefault();
    history.push(`/${result}`);
  };

  const handlerChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <div className={style.navbar}>
      <div className={style.brand}>
        <a href="/">
          <i className="fa fa-fw fa-stethoscope"></i>Klik Dokter
        </a>
      </div>
      {checkLogin() && (
        <a href="/logout">
          <i className="fa fa-fw fa-user"></i> Logout
        </a>
      )}
      {!checkLogin() && (
        <>
          <a href="/login">
            <i className="fa fa-fw fa-user"></i> Login
          </a>
          <form onSubmit={(e) => handlerSubmit(e)} method="get">
            <input
              type="search"
              placeholder="search.."
              onChange={(e) => handlerChange(e, "value")}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Navbar;
