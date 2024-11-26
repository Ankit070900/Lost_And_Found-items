import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import ItemListProvider from "../Store/Post list Store";

function App() {
  return (
    <ItemListProvider>
      <Header />
      <Outlet />
      <Footer />
    </ItemListProvider>
  );
}

export default App;
