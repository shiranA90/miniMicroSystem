import React from "react";
import PropTypes from 'prop-types';
import { InputContainer, InputBase, Text } from "./style";

export const Input = ({ placeholder, onChange, onFocus, type, value, errorMessage }) => {
  return (
    <InputContainer>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        value={value}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
    </InputContainer>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  type: 'number',
  value: ''
};
