import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

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
