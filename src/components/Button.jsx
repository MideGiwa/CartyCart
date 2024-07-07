import React, { useState } from "react";
import { Link } from "react-router-dom";

const Button = ({ to, onClick, disabled, children, className, isOrange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const Element = to ? Link : "button";

  const additionalProps = to ? { to } : { onClick };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonCommonStyles = {
    padding: "10px 25px",
    width: "100%",
    border: "1px solid #EB8F05",
    // borderRadius: "40px",
    cursor: disabled ? "not-allowed" : "pointer", // Update cursor based on disabled state
    textDecoration: "none",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap", // Corrected property name from textWrap to whiteSpace
    textAlign: "center",
    fontFamily: "Lora",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  };

  const buttonStyleWhite = {
    ...buttonCommonStyles,
    backgroundColor: isHovered ? "#EB8F05" : "white",
    color: isHovered ? "white" : "#EB8F05",
  };

  const buttonStyleOrange = {
    ...buttonCommonStyles,
    display: "flex",
    backgroundColor: isHovered ? "white" : "#EB8F05",
    color: isHovered ? "#EB8F05" : "white",
  };

  const style = isOrange ? buttonStyleOrange : buttonStyleWhite;

  // Conditionally apply disabled styles
  const disabledStyle = {
    backgroundColor: "white",
    color: "#475467",
    border: "1px solid #CFC0F9",
    cursor: "not-allowed",
  };

  // Merge styles based on disabled state
  const mergedStyle = disabled ? { ...style, ...disabledStyle } : style;

  return (
    <Element
      {...additionalProps}
      className={className}
      disabled={disabled}
      style={mergedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Element>
  );
};

export default Button;
