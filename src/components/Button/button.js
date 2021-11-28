import React from "react";
import PropsType from "prop-types";

export const Button = ({ backGroundColor, text, onAdd }) => {
  return (
    <div>
      <button
        onClick={onAdd}
        style={{
          backgroundColor: backGroundColor,
          height: "50px",
          width: "80px",
          color: "white",
          borderRadius: "6px",
        }}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  backGroundColor: "turquoise",
  text: "button",
};

Button.PropsType = {
  backGroundColor: PropsType.string,
  text: PropsType.string,
  handleClick: PropsType.func.isRequired,
};
