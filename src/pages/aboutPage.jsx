import { useEffect } from "react";
import About from "../components/Fragments/About";
import Layouts from "../components/Layouts/Layouts";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About - Akhfee Lauki Mahfuda";
  }, []);
  return (
    <Layouts>
      <About />
    </Layouts>
  );
};

export default AboutPage;
