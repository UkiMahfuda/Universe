import { Link } from "react-router-dom";

const BtnNavbar = (props) => {
  const { children } = props;
  return <Link className="bg-secondary hover:text-orange transition-all">{children}</Link>;
};

export default BtnNavbar;
