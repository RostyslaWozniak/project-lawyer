/** @format */

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex min-h-[100vh] flex-col ">
      <Header />
      <main className="grid grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
