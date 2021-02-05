import style from "./navbar.module.css";
import { checkLogin } from "../../Helper";

const Navbar = () => {
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
        <a href="/login">
          <i className="fa fa-fw fa-user"></i> Login
        </a>
      )}
      {/* <a href="#">
        <i className="fa fa-fw fa-search"></i> Search
      </a> */}
    </div>
  );
};

export default Navbar;
