import { Link } from "react-router-dom";

const BtnNavbar = (props) => {
  const { children, link } = props;
  return (
    <Link className=" hover:text-tesier transition-all p-3 bg-transparent" to={link}>
      {children}
    </Link>
  );
};

export default BtnNavbar;
