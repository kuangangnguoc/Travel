import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Loading from "../loading/Loading";

const Button = ({
  type = "button",
  onClick = () => {},
  isLoading,
  children,
  to,
  ...props
}) => {
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to}>
        <div>
          <button
            type={type}
            {...props}
            className="px-10 py-5 mt-16 rounded-lg bg-[#ED4949] text-white font-bold text-xl"
          >
            {children}
          </button>
        </div>
      </NavLink>
    );
  }

  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        {...props}
        className="px-10 py-5 mt-16 rounded-lg bg-[#ED4949] text-white font-bold text-xl"
      >
        {!isLoading ? children : <Loading></Loading>}
      </button>
    </div>
  );
};

Button.prototype = {
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default Button;
