import { Fragment } from "react";
import Navbar from "../Elements/Navbar";
import SideContact from "../Elements/SideContact";

const Layouts = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Navbar />
      {children}
      <SideContact />
    </Fragment>
  );
};

export default Layouts;
