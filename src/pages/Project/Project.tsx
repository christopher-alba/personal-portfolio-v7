import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Project as ProjectType, projects } from "../Projects/data";

const Project: FC = () => {
  const [state, setState] = useState<ProjectType>();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      setState(
        projects.filter((x) => {
          return (
            x.name.replaceAll(" ", "").toLowerCase() ===
            location.pathname.split("/")[2].replaceAll(" ", "").toLowerCase()
          );
        })[0]
      );
    } else {
      setState(location.state);
    }
  }, [location]);

  return <div>{state?.name}</div>;
};

export default Project;
