import React from 'react'
import Modal from '../components/Modal'
import styled from 'styled-components'
import { rem } from 'polished'

const TransferImage = styled.img`
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: 50%;
  margin-top: ${rem(8)};
  margin-left: ${rem(14)};
`

const TransferDetailsModal = ({
  isOpen,
  travelerFirstName,
  travelerLastName,
  phoneNumber,
  travelerPhoto,
  email,
  country,
  closeModal,
}) => {
  return (
    <div>
      {isOpen && (
        <Modal onClose={closeModal}>
          <p>Transfer Details</p>
          <TransferImage
            src={travelerPhoto}
            alt="Traveler photo"
            aria-hidden="true"
          />
          <p>{`${travelerFirstName} ${travelerLastName}`}</p>
          <p>Phone number</p>
          <p>{`${phoneNumber}`}</p>
          <p>Email</p>
          <p>{`${email}`}</p>
          <p>Country</p>
          <p>{`${country}`}</p>
        </Modal>
      )}
    </div>
  )
}

export default TransferDetailsModal
