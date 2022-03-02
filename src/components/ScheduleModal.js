import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  z-index: 999;
  border-radius: 20px;

  @media (max-width: 420px) {
    width: 300px;
    height: 550px;
  }
`;

export const ScheduleModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <background>
          <ModalWrapper showModal={showModal}>
            <div>hola soy un focking modal</div>
          </ModalWrapper>
        </background>
      ) : null}
    </>
  );
};
