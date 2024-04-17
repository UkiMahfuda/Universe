import { Link } from "react-router-dom";

const BtnNavbar = (props) => {
  const { children } = props;
  return (
    <div>
      <Link className="bg-secondary hover:text-orange transition-all">{children}</Link>
    </div>
  );
};

export default BtnNavbar;
