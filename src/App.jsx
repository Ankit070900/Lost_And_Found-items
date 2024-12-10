import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer";
import { Outlet, Route, Routes } from "react-router";
import Home from "./Page/Home";
import CreatePost from "./Page/CreatePost";
import MyList from "./Page/MyList";
import ItemListProvider from "./Store/Post-list-Store";

function App() {
  return (
    <ItemListProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Found" element={<CreatePost />} />
        <Route path="/Mylist" element={<MyList />} />
      </Routes>
      <Footer />
    </ItemListProvider>
  );
}

export default App;
