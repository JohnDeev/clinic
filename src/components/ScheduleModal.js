import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
const Background = styled.div`
  min-width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.493);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  width: 50%;
  height: 380px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 300px;
    height: 400px;
  }

  @media (min-width: 760px) and (max-width: 960px) {
    width: 60%;
    height: 400px;
  }
`;

const HeaderModal = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BackArrow = styled.div``;
const CloseModal = styled.div``;

const ModalContent = styled.div``;
const SelectMedical = styled.div``;

const MedicalSelect = () => {
  return <div>el primro</div>;
};

export const ScheduleModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <HeaderModal>
              <BackArrow>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 24 24'
                  height='20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z'></path>
                </svg>
              </BackArrow>
              <CloseModal>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 24 24'
                  height='25'
                  width='25'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                </svg>
              </CloseModal>
            </HeaderModal>
            <ModalContent>
              {/* <MedicalSelect /> */}
              <Switch>
                <Route path='/MedicalSelect' component={<MedicalSelect />}></Route>
              </Switch>
            </ModalContent>

            {/* <SelectMedical></SelectMedical> */}
            <div> modal</div>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
