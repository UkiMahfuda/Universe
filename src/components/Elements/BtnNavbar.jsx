import { Link } from "react-router-dom";

const BtnNavbar = (props) => {
  const { children } = props;
  return <Link className=" hover:text-orange transition-all p-3 bg-transparent">{children}</Link>;
};

export default BtnNavbar;
