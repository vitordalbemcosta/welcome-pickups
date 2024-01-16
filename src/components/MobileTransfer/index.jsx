import React, { useState, useEffect } from 'react'
import { breakpoints } from '../../breakpoints'
import styled from 'styled-components'
import { rem } from 'polished'

const Wrapper = styled.button`
  width: ${rem(320)};
  height: ${rem(312)};
  flex-shrink: 0;
  background-color: #fff;
  filter: drop-shadow(0px 1px 1px rgba(45, 59, 78, 0.06));
  cursor: pointer;
  border: none;
  outline: none;
  margin-bottom: 10px;
`

const MobileTransferDetailsModal = styled.div`
  background-color: #fff;
  padding: ${rem(20)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 100%;
  height: 100%;

  button {
    margin: ${rem(150)};
  }
`

const Name = styled.p`
  font-size: ${rem(18)};
  font-weight: 600;
  line-height: ${rem(22)};
  color: #2d3b4e;
`

const DetailsContainer = styled.div`
  margin: 16px 27px;
  display: flex;
  flex-direction: column;
  margin-top: ${rem(16)};

  h6 {
    font-size: ${rem(12)};
    font-weight: 600;
    line-height: ${rem(14)};
    letter-spacing: 0px;
    text-align: left;
    color: rgba(45, 59, 78, 0.5);
    text-transform: uppercase;
    margin-bottom: ${rem(2)};
  }

  p {
    font-size: ${rem(14)};
    font-weight: 500;
    line-height: ${rem(17)};
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: ${rem(32)};
    color: #2d3b4e;
    margin-bottom: ${rem(15)};
  }
`
const PhotoAndNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 27px;
`

const ImageWrapper = styled.div`
  display: flex;
  margin: 0 27px;
`

const TransferImage = styled.img`
  width: ${rem(54)};
  height: ${rem(54)};
  border-radius: 50%;
  margin-top: ${rem(-10)};
`

const MobileTransfer = ({
  isOpen,
  firstName,
  photo,
  fromLocationTitle,
  fromDatetime,
  propertyTitle,
}) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= parseInt(breakpoints.tablet),
  )

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTransfer, setSelectedTransfer] = useState(null)

  const openModal = (transfer) => {
    setModalOpen(true)
    setSelectedTransfer(transfer)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedTransfer(null)
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= parseInt(breakpoints.tablet))
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      {isMobile && (
        <>
          <Wrapper onClick={() => openModal()}>
            <ImageWrapper>
              <image>arriving</image>
            </ImageWrapper>
            <PhotoAndNameWrapper>
              <Name>{`${firstName}`}</Name>
              <TransferImage
                src={`${photo}`}
                alt="Traveler photo"
                aria-hidden="true"
              />
            </PhotoAndNameWrapper>
            <DetailsContainer>
              <h6>Property</h6>
              <p>{`${propertyTitle}`}</p>
              <h6>Arrival Time</h6>
              <p>{`${fromDatetime}`}</p>
              <h6>from</h6>
              <p>{`${fromLocationTitle}`}</p>
              <h6>Opportunities</h6>
              <image></image>
            </DetailsContainer>
          </Wrapper>
          {modalOpen && (
            <MobileTransferDetailsModal>
              <h2>Mobile Transfer Details Modal</h2>
              <button onClick={closeModal}>Close Modal</button>
            </MobileTransferDetailsModal>
          )}
        </>
      )}
    </div>
  )
}

export default MobileTransfer
