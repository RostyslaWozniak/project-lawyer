import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/Home/Home.tsx";
import Services from "./pages/Services/Services.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./assets/index.css";
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Route>,
  ),
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
