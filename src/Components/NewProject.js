import FormMyProjects from "./FormMyProjects";
import NavbarTop from "./NavbarTop";
import NavbarLeft from "./NavbarLeft";

function NewProject() {
  return (
    <div>
      <NavbarTop />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <NavbarLeft />
        </div>

        <div style={{ width: "1300px" }}>
          <div
            style={{ display: "flex", "flex-direction": "row", width: "100%" }}
          >
            <FormMyProjects></FormMyProjects>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProject;
