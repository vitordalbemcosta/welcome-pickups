import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import CloseIcon from '../../images/close-icon.svg'

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
`

const ModalContent = styled.div`
  background: #fff;
  border-radius: ${rem(8)};
  padding: ${rem(16)};
  width: 990px;
  height: 666px;
  flex-shrink: 0;
  position: relative;
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
`

const CloseIconImage = styled.img`
  width: 20px;
  height: 20px;
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
