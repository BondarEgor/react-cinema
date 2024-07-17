import { LinearProgress } from "@mui/material";
import "./styles.css";
import { projects } from "./constants";

export default function ProjectStatus() {
  return (
    <div className='container'>
      <div className="header">
        <span className="assignment">Assignment</span>
        <span className="status">Project status</span>
      </div>
      <div className="project-block">
        {projects.map((project) => {
          return (
            <div key={project.projectName}>
              <span className="project-name">{project.projectName}</span>
              <LinearProgress variant="determinate" value={project.progress} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
