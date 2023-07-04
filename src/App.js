import "./App.css";
import NavbarTop from "./Components/NavbarTop";
import NavbarTopLogin from "./Components/NavBarTopLogin";
import NavbarTopRegist from "./Components/NavBarTopRegist";
import NavbarLeft from "./Components/NavbarLeft";
import NewProject from "./Components/NewProject";
import MyProjects from "./Components/MyProjects";
import DefaultHome from "./Components/DefaultHome";
import LoginBranch from "./Components/LoginBranch";
import RegistBranch from "./Components/RegistBranch";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <NavbarTop />
            {/* <NavbarTopRegist/>
            <RegistBranch /> */}

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                    <NavbarLeft />
                </div>
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/home" element={<DefaultHome />} />
                            <Route path="/NewProject" element={<NewProject />} />
                            <Route path="/MyProjects" element={<MyProjects />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default App;
