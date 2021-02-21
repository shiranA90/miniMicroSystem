import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const InputBase = styled.input`
  font-size: 16px;
  lineHeight: 20px;
  background-color: transparent;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  padding: 10px 0px;
  padding-inline-start: 8px;
  max-width: 100%;
  width: 320px;
  border-radius: 5px;
  border: 1px solid;
`;

export const Text = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: red;
`;
