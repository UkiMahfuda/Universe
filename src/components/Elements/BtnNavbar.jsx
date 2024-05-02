import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BtnNavbar = (props) => {
  const { children, link } = props;
  const [active, setActive] = useState(false);
  // dimana letak path yang active
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname === link);
  }, [location, link]);

  return (
    <Link onClick={() => setActive(!active)} className={`hover:text-tesier transition-all p-3 bg-transparent ${active ? "text-tesier" : ""} `} to={link}>
      {children}
    </Link>
  );
};

export default BtnNavbar;
