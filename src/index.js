import "./index.css";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router";

import { router } from "./routes/root";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
