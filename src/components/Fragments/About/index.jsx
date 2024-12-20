import { Content } from "./Content/Content";
import { Experience } from "./Experience/Experience";
import { Skills } from "./Skills/Skills";

const About = () => {
  return (
    <div className="bg-primary">
      <Content />
      <Experience />
      <Skills />
    </div>
  );
};
export default About;
