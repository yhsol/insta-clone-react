import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  background-color: ${props => props.theme.backgroundColor};
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  padding: 0px 0.5rem;
  font-size: 12px;
  ${props => props.theme.whiteBox};
  width: 60%;
  margin: 0 auto;
  height: 1.7rem;
`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className,
  style
}) => (
  <Container
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    className={className}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Input;
