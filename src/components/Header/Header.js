import propsType from "prop-types";
import { Button } from "../Button/button";
import "./Header.css";
import { useLocation } from "react-router";

export const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <div className="header">
      <h1>{title}</h1>
      <i class="bi bi-clipboard-check"></i>
      {location.pathname === "/" && (
        <Button
          backGroundColor={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onAdd={onAdd}
        />
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "This is default title",
};

Header.propsType = {
  title: propsType.string.isRequired,
};
