import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import CloseIcon from '../../images/close-icon.svg'
import { breakpoints } from '../../breakpoints'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(45, 59, 78, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

const ModalContent = styled.div`
  background: #fff;
  border-radius: ${rem(8)};
  padding: ${rem(16)};
  width: ${rem(990)};
  height: ${rem(666)};
  flex-shrink: 0;
  position: relative;
  @media (max-width: ${breakpoints.laptop}) {
    width: 85%;
    min-height: 55%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-width: 75%;
    min-height: 55%;
  }

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: ${rem(8)};
  right: ${rem(8)};
  background: rgba(45, 59, 78, 0.05);
  border-radius: ${rem(20)};
  width: ${rem(34)};
  height: ${rem(34)};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${rem(22)};
`

const CloseIconImage = styled.img`
  width: ${rem(20)};
  height: ${rem(20)};
  fill: #2d3b4e;
`

const TransferDetailsModal = ({ onClose, children }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CloseIconImage src={CloseIcon} alt="Close" />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}

export default TransferDetailsModal
