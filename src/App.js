import "./App.css";
import NavbarTop from "./Components/NavbarTop";
import NavbarLeft from "./Components/NavbarLeft";
// import NewProject from "./Components/NewProject";
// // import FormMyProjects from "./Components/FormMyProjects";
// import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavbarTop></NavbarTop>
      {/* <div style = {{"display":"flex","flex-direction":"row"}}>
      <BrowserRouter> */}
      <NavbarLeft/>
      {/* <Switch>
      <Route path="/NewProject" component={NewProject} />
      </Switch>
      </BrowserRouter>
      
      </div> */}
      
    </div>
  );
}

export default App;
