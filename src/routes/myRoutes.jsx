import { createBrowserRouter } from "react-router-dom";
import Template1 from "../pages/Template1";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Template1 />,
  },
]);
export default routes;
