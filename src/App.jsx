import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import CommonElement from "./components/CommonElement";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full overflow-hidden">
          <Sidebar />
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;
