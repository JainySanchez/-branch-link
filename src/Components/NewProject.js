import FormMyProjects from "./FormMyProjects";


function NewProject() {
    return (
        <div style={{width: "1300px" }}>
            <div style={{ "display": "flex", "flex-direction": "row", width: "100%" }}>
                <FormMyProjects></FormMyProjects>
            </div>
        </div>
    );
}

export default NewProject;
