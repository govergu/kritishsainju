import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./component/hero";
import Main from "./component/Main";
import Toggle from "./component/toggle";
import ViewProjects from "./component/viewmoreProject";
import { useContext } from "react";
import ProjectContext from "./store/store";

function App() {
  const { viewmoreProject } = useContext(ProjectContext);
  return (
    <>
      <Toggle />
      <div className="row mb-3 content" bis_skin_checked="1">
        {viewmoreProject && <ViewProjects />}
        <Hero />
        <Main />
      </div>
    </>
  );
}

export default App;
