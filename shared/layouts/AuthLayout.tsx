import React from "react";
import styled from "styled-components";

const AuthLayout: React.FC<{ children: React.ReactNode; flex?: boolean }> = ({
  children,
  flex,
}) => {
  return (
    <StyledAuthLayout>
      <div
        className={
          flex ? "auth_container auth_container-flex" : "auth_container"
        }
      >
        <img src="/images/primary/logo.png" alt="" />
        <div className="line"></div>
        {children}
      </div>
    </StyledAuthLayout>
  );
};

export { AuthLayout };

export const Title = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 105%;
  height: 42px;
  display: grid;
  place-content: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 165%;
  }
`;

const StyledAuthLayout = styled.div`
  .auth_container {
    min-height: calc(100vh - 226px);
    width: 100vw;
    padding: 113px 0;
    display: grid;
    place-content: center;
    text-align: center;

    &-flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  img {
    width: 500px;
    height: 76px;
    margin: 0 auto;
  }

  .line {
    width: 500px;
    height: 1px;
    background: var(--orange);
    margin: 25px auto;
  }

  span {
    padding: 0 50px;
    height: 42px;
    font-weight: 500;
    font-size: 18px;
    display: grid;
    opacity: 0.32;
    place-content: center;
  }

  .register {
    margin-bottom: 50px;
    height: 42px;
    font-size: 18px;
    font-weight: 400;
    text-decoration: underline;
    display: grid;
    place-content: center;
  }

  .input_block {
    display: flex;
    flex-direction: column;
    position: relative;
    &.red {
      input {
        border: 1px solid #f50303;
      }
    }
    &:not(:first-child) {
      margin-top: 35px;
    }
  }

  .danger {
    position: absolute;
    top: 73%;
    right: 15px;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }

  label {
    margin-bottom: 15px;
    letter-spacing: 5%;
    font-weight: 500;
    font-size: 18px;
    text-align: left;
  }

  input {
    color: #fff;
    border: 1px solid #f56e03;
    border-radius: 5px;
    height: 42px;
    background: transparent;
    font-size: 14px;
    padding: 0 10px;
    letter-spacing: 5%;
    &::placeholder {
      letter-spacing: 0.05em;
      opacity: 0.55;
    }
  }

  .row {
    height: 42px;
    display: grid;
    grid-template-columns: 320px 236px;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
  }

  button {
    width: 100%;
    height: 100%;
    background: var(--orange);
    color: #fff;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-weight: 500;
    font-size: 18px;
    border: none;
    cursor: pointer;

    &:disabled {
      background: #af5a15;
    }
  }
  form {
    margin-top: 50px;

    .controls-wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-top: 50px;
      align-items: center;

      button {
        width: 50%;
        height: 42px;
        margin-right: 44px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .auth_container {
      min-height: calc(100vh - 150px);
      padding: 50px 0 100px;
    }
    img {
      height: auto;
      width: 100%;
    }
    .line {
      width: 100%;
    }
    span {
      height: 30px;
      font-size: 18px;
      margin: 10px 0;
    }
    .register {
      margin-bottom: 20px;
    }
    .row {
      grid-template-columns: 1fr;
      height: auto;
      grid-gap: 10px;
    }
    .danger {
      top: 130%;
    }
    button {
      height: 42px;
    }
    .forgot {
      height: 42px;
      display: grid;
      place-content: center;
    }
    .input_block {
      &:nth-child(n + 2) {
        margin-top: 20px;
      }
    }
  }
`;
