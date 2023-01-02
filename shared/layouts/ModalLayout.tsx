import React from "react";
import styled from "styled-components";

const ModalLayout: React.FC<{
  children: React.ReactNode;
  onClick?: (e: any) => void;
  className?: string;
}> = ({ children, onClick, className = "" }) => {
  return (
    <StyledModalLayout className={className} onClick={onClick}>
      <div className="modal_content">{children}</div>
    </StyledModalLayout>
  );
};

export default ModalLayout;

const StyledModalLayout = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background: rgba(23, 23, 23, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  .modal_content {
    position: relative;
    z-index: 2;
    background: linear-gradient(169.76deg, #2c2c2c 0%, #111111 100%),
      linear-gradient(113.96deg, #243641 0%, #111111 100%);
    border: 1px solid #f56e03;
    box-shadow: 12px 12px 32px rgba(18, 18, 18, 0.55);
    border-radius: 5px;
    padding: 20px 20px 25px;
    max-width: 920px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 100%;
    height: 100%;
    overflow-y: scroll;
    align-items: flex-start;
    .modal_content {
      margin: 65px 0 0;
      max-width: 335px;
    }
  }
`;
