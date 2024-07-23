import { useEffect } from "react";
import Projects from "../components/Fragments/Projects/Index";
import Layouts from "../components/Layouts/Layouts";

const ProjectPage = () => {
  useEffect(() => {
    document.title = "Project - Akhfee Lauki Mahfuda";
  }, []);
  return (
    <Layouts>
      <Projects />
    </Layouts>
  );
};

export default ProjectPage;
