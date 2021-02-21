import React from "react";
import PropTypes from 'prop-types';
import { ButtonBase, ButtonContainer } from "./style";


export const Button = ({ onClick, label })=> {
  return <ButtonContainer><ButtonBase onClick={onClick}>{label}</ButtonBase></ButtonContainer>
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
