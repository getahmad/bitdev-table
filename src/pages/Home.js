import ListBarang from "../components/ListBarang/listBarang";
import Navbar from "../components/Navbar/navbar";
import CardBarang from "../components/CardBarang/cardBarang";
import { checkLogin } from "../Helper";

const Home = () => {
  return (
    <>
      <Navbar />
      <ListBarang />
      {!checkLogin() && <CardBarang />}
    </>
  );
};

export default Home;
