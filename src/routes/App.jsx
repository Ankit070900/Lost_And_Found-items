import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

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
