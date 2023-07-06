import "./App.css";
import NewProject from "./Components/NewProject";
import MyProjects from "./Components/MyProjects";
import DefaultHome from "./Components/DefaultHome";
import LoginBranch from "./Components/LoginBranch";
import RegistBranch from "./Components/RegistBranch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<DefaultHome />} />
          <Route path="/NewProject" element={<NewProject />} />
          <Route path="/MyProjects" element={<MyProjects />} />
          <Route exact path="/" element={<LoginBranch />} />
          <Route exact path="/Regist" element={<RegistBranch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
