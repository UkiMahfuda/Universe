import { useEffect } from "react";
import Desc from "../components/Fragments/Projects/DescProject/Desc";

const DescPage = () => {
  useEffect(() => {
    document.title = "Desc Project - Akhfee Lauki Mahfuda";
  }, []);
  return <Desc />;
};
export default DescPage;
