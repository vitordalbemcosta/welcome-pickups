import React, { useState, useEffect } from 'react'
import { breakpoints } from '../../breakpoints'
import styled from 'styled-components'
import { rem } from 'polished'
import formatDate from '../../utils/formatDate'
import determineCategoryImageMobile from '../../utils/categoryImageMobile'
import BabyOppotunity from '../../images/Baby.svg'
import EarlyCheckInOppotunity from '../../images/Early_check_in.svg'
import LateCheckOutOppotunity from '../../images/Late_check_out.svg'
import TransferOppotunity from '../../images/Transfer.svg'

const Wrapper = styled.button`
  width: ${rem(320)};
  height: ${rem(310)};
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
  margin-bottom: 22px;

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
  margin: -12px 27px;
`

const ImageWrapper = styled.div`
  display: flex;
  margin: 17px 23px 5px 23px;
`

const TransferImage = styled.img`
  width: ${rem(54)};
  height: ${rem(54)};
  border-radius: 50%;
  margin-top: ${rem(-12)};
`
const CategoryImage = styled.img`
  width: ${rem(75)};
  height: ${rem(20)};
  margin-bottom: 8px;
  gap: 20px;
`
const OpportunityImage = styled.img`
  width: ${rem(24)};
  height: ${rem(24)};
  border-radius: 50%;
`
const BackgroundWrapper = styled.div`
  width: 38px;
  height: 38px;
  background-color: #f4f5f6;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 6px 13px 10px 0;
`
const OpportunitiesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const MobileTransfer = ({
  isOpen,
  firstName,
  lastName,
  photo,
  fromLocationTitle,
  fromDatetime,
  propertyTitle,
  category,
  babies,
  earlyCheckin,
  lateCheckout,
  returnTransfer,
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
        <div>
          <Wrapper onClick={() => openModal()}>
            <ImageWrapper>
              <CategoryImage
                src={determineCategoryImageMobile(category)}
                alt="Category image"
                aria-hidden="true"
              />
            </ImageWrapper>
            <PhotoAndNameWrapper>
              <Name>
                {`${firstName}`} {`${lastName}`}
              </Name>
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
              <p>{`${formatDate(fromDatetime)}`}</p>
              <h6>from</h6>
              <p>{`${fromLocationTitle}`}</p>
              <h6>Opportunities</h6>
              <OpportunitiesWrapper>
                {babies && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={BabyOppotunity}
                      alt="Baby Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {earlyCheckin && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={EarlyCheckInOppotunity}
                      alt="Early Check-In Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {lateCheckout && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={LateCheckOutOppotunity}
                      alt="Late Check-Out Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {returnTransfer && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={TransferOppotunity}
                      alt="Transfer Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
              </OpportunitiesWrapper>
            </DetailsContainer>
          </Wrapper>
          {modalOpen && (
            <MobileTransferDetailsModal>
              <h2>Mobile Transfer Details Modal</h2>
              <button onClick={closeModal}>Close Modal</button>
            </MobileTransferDetailsModal>
          )}
        </div>
      )}
    </div>
  )
}

export default MobileTransfer
