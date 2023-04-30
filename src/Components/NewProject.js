import NavbarTop from "./NavbarTop";
import NavbarLeft from "./NavbarLeft";
import FormMyProjects from "./FormMyProjects";


function NewProject() {
  return (
    <div>
    <NavbarTop></NavbarTop>
    <div style = {{"display":"flex","flex-direction":"row"}}>
    <NavbarLeft></NavbarLeft>
    <FormMyProjects></FormMyProjects>
    </div>
    
  </div>
  );
}

export default NewProject;
