import React, { useState } from "react";

const Tooltip = ({ name, children, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {visible && (
        <div className="bounce-animation absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-white text-xs rounded-md  py-1 px-2 bg-secondary text-center whitespace-nowrap ">
          <span className="poppins-semibold">{name}</span> <br />
          <hr className="text-tesier " />
          <span className="montserrat">{text}</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
