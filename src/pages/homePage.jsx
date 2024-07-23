import { useEffect } from "react";
import { Home } from "../components/Fragments/Home/Index";
import Layouts from "../components/Layouts/Layouts";

const HomePage = () => {
  useEffect(() => {
    document.title = "Akhfee Lauki Mahfuda";
  }, []);
  return (
    <Layouts>
      <Home />
    </Layouts>
  );
};

export default HomePage;
