import Cookies from "js-cookie";

export function checkLogin() {
  return typeof Cookies.get("token") === "undefined" ||
    Cookies.get("token") === "undefined"
    ? false
    : true;
}
