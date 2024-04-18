import { Fragment } from "react";
import Navbar from "../Fragments/Navbar";
import SideContact from "../Fragments/SideContact";

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
