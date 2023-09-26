import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import AddVideo from "./components/pages/Add.jsx";
import Edit from "./components/pages/Edit.jsx";
import Video from "./components/pages/Video.jsx";
import { Provider } from "react-redux";
import store from "./redux/app/store.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/videos/add",
        element: <AddVideo />,
      },
      {
        path: "/videos/edit/:id",
        element: <Edit />,
      },
      {
        path: "/videos/:videoName/:id",
        element: <Video />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
