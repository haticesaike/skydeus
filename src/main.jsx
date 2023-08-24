import { Box, MantineProvider } from "@mantine/core";
import ReactDOM from "react-dom/client";
import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/index.jsx";
import Schedules from "./Schedules/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/schedules",
    element: <Schedules />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Box bg="#015fb7">
      <RouterProvider router={router} />
    </Box>
  </MantineProvider>
);
