import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Logout from "./components/Logout/logout";
import AddBarang from "./components/ListBarang/addBarang";
import EditBarang from "./components/ListBarang/editBarang";
import { checkLogin } from "./Helper";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/edit-barang/:kode_sku">
            {checkLogin() && <EditBarang />}
          </Route>
          <Route path="/tambah-barang">{checkLogin() && <AddBarang />}</Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/:result">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
