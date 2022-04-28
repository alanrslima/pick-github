import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: var(--color-background);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  max-width: 450px;
  padding: 42px;
  background: var(--color-surface);
  border-radius: 10px;
  flex-direction: column;
`;

export const FormTitle = styled.h1`
  color: #fff;
`;
export const FormSubTitle = styled.span`
  margin-top: 6px;
  font-size: 14px;
  color: #aaa;
`;

export const FormInput = styled.input`
  background: #4f4f4f;
  min-height: 50px;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  padding: 12px 16px;
  margin-top: 64px;
  transition: all 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: 0 none;
  }
`;

export const FormButton = styled.button`
  padding: 16px 24px;
  min-height: 45px;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  background: ${(props) =>
    props.disabled ? "var(--color-gray)" : "var(--color-primary)"};
  cursor: pointer;
  transition: 0.2s ease;
  margin-top: 42px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    opacity: 0.5;
  }
`;
