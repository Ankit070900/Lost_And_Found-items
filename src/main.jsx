import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./routes/MainPage.jsx";
import FoundItem from "./routes/FoundItem.jsx";
import { Provider } from "react-redux";
import MyList from "./Components/MyList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/Found", element: <FoundItem /> },
      { path: "/Mylist", element: <MyList /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
