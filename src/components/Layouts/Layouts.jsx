import { Fragment } from "react";
import Navbar from "../Fragments/Navbar";

const Layouts = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default Layouts;
