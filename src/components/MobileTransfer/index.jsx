import React, { useState, useEffect } from 'react'
import { breakpoints } from '../../breakpoints'
import styled from 'styled-components'
import { rem } from 'polished'
import formatDate from '../../utils/formatDate'
import determineCategoryImageMobile from '../../utils/categoryImageMobile'
import BabyOppotunity from '../../images/BabyOpportunityIcon.svg'
import EarlyCheckInOppotunity from '../../images/EarlyCheckInIcon.svg'
import LateCheckOutOppotunity from '../../images/LateCheckoutIcon.svg'
import TransferOppotunity from '../../images/TransferIcon.svg'
import CloseIcon from '../../images/close-icon.svg'
import ChildSeatIcon from '../../images/Child_seat.svg'
import HandLuggageIcon from '../../images/HandLuggage.svg'
import LuggageIcon from '../../images/Luggage.svg'
import PassangerIcon from '../../images/Passengers.svg'
import FillIcon from '../../images/Fill.svg'
import ArrowDotted from '../../images/Arrow.Dotted.svg'
import formatTime from '../../utils/formatTime'
import TransfersDetailsRectangle from '../TransfersDetailsRectangle'
import TransfersDetailsFlightStatus from '../TransfersDetailsFlightStatus'
import CallButton from '../../images/CallButton.svg'
import MessageButton from '../../images/MessageButton.svg'

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

  &:hover {
    background: #e3e5e8;
  }
`

const Name = styled.p`
  font-size: ${rem(16)};
  font-weight: 600;
  line-height: normal;
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
const GuestImage = styled.img`
  width: ${rem(62)};
  height: ${rem(62)};
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
  width: ${rem(33)};
  height: ${rem(33)};
  border-radius: 50%;
`
const OpportunityImageModal = styled.img`
  width: ${rem(33)};
  height: ${rem(33)};
  border-radius: 50%;
  margin: 7px 44px;
`
const BackgroundWrapper = styled.div`
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

const MobileTransferDetailsModal = styled.div`
  background-color: #fff;
  position: fixed;
  top: calc(50% + ${rem(14)});
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 100%;
  height: 100%;
  overflow: auto;
  border-radius: 12px 12px 0px 0px;
  transition: opacity 0.5s ease-in-out;
`
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
  transition: opacity 0.5s ease-in-out;
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
  margin: ${rem(15)};
`

const CloseIconImage = styled.img`
  width: ${rem(20)};
  height: ${rem(20)};
  fill: #2d3b4e;

  &:hover {
    background: #e3e5e8;
  }
`

const ModalContent = styled.div``

const CloseButtonContainer = styled.div`
  width: 100%;
  height: 85px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(45, 59, 78, 0.05);
`

const CloseButtonText = styled.p`
  font-size: ${rem(16)};
  margin-left: 20px;
  color: rgba(45, 59, 78, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`

const Container = styled.div`
  width: ${rem(656)};
  height: ${rem(314)};
  padding: ${rem(20)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: #2d3b4e;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
  }
`
const ModalTransferDetails = styled.div`
  margin: 10px 24px;
`
const TransfersContainer = styled.div``

const BarUnderDate = styled.div`
  width: ${rem(52)};
  height: ${rem(2)};
  flex-shrink: 0;
  border-radius: ${rem(1.5)};
  background: #48d9a4;
  margin: -5px 0px 17px 0;
`

const TransferDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Date = styled.h6`
  font-size: ${rem(16)};
  font-weight: 600;
  color: #2d3b4e;
  margin-bottom: ${rem(16)};
`

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: ${rem(470)};

  p {
    color: rgba(45, 59, 78, 0.5);
    font-size: ${rem(12)};
    font-style: normal;
    font-weight: 400;
    line-height: ${rem(18)};
    margin-top: ${rem(4)};
  }
`

const LocationInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  padding-right: 10px;
`

const LocationInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  h4 {
    color: #2d3b4e;
    font-size: ${rem(15)};
    font-style: normal;
    font-weight: 400;
    line-height: ${rem(24)};
  }

  p {
    color: rgba(45, 59, 78, 0.5);
    font-size: ${rem(14)};
    font-style: normal;
    font-weight: 600;
    line-height: ${rem(21)};
    text-align: left;
    margin-left: 100px;
  }
`

const LocationAddress = styled.p`
  margin: ${rem(11)} 0;
`

const LocationArrow = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${rem(4)} 0 0 0;
`

const FillIconStyled = styled.img`
  width: ${rem(12)};
  height: ${rem(12)};
  margin: ${rem(4)} 0;
`

const ArrowDownStyled = styled.img`
  width: ${rem(6)};
  height: ${rem(25)};
  margin: ${rem(6)} 0;
`

const HorizontalLine = styled.div`
  width: ${rem(320)};
  height: ${rem(1)};
  flex-shrink: 0;
  background: rgba(45, 59, 78, 0.08);
  margin: ${rem(32)} 0;
`

const ShortHorizontalLine = styled.div`
  width: ${rem(235)};
  height: ${rem(1)};
  margin: ${rem(18)} 0 ${rem(14)} 0;
  background: rgba(45, 59, 78, 0.08);
`

const YourGuest = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${rem(30)};
`

const OpportunitiesTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${rem(-10)};
  margin-top: ${rem(8)};
  p {
    margin-left: ${rem(-22)};
  }
`

const PhoneAndCountry = styled.p`
  color: rgba(45, 59, 78, 0.5);
  font-size: ${rem(14)};
  font-weight: 600;
  margin-top: ${rem(9)};
`

const GuestInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${rem(25)};
`

const GuestImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const BottomButtonsWrapper = styled.div`
  margin: ${rem(26)} 0;

  img {
    margin: 0 ${rem(10)};
  }
`

const MobileTransfer = ({
  onSelectedTransfer,
  firstName,
  lastName,
  photo,
  fromLocationTitle,
  fromDatetime,
  propertyTitle,
  category,
  onClose,
  fromLocationAddress,
  toLocationTitle,
  toLocationAddress,
  toDatetime,
  country,
  flightStatus,
  passengers,
  babySeats,
  luggage,
  handLuggage,
  babies,
  earlyCheckin,
  lateCheckout,
  returnTransfer,
  phoneNumber,
}) => {
  const opportunities = [
    {
      icon: PassangerIcon,
      number: passengers,
    },
    {
      icon: ChildSeatIcon,
      number: babySeats,
    },
    {
      icon: LuggageIcon,
      number: luggage,
    },
    {
      icon: HandLuggageIcon,
      number: handLuggage,
    },
  ]
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= parseInt(breakpoints.tablet),
  )

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (transfer) => {
    setModalOpen(true)
    onSelectedTransfer(transfer)
  }

  const closeModal = () => {
    setModalOpen(false)
    onSelectedTransfer(null)
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
            <ModalOverlay modalOpen={modalOpen} onClick={closeModal}>
              <MobileTransferDetailsModal>
                <CloseButtonContainer>
                  <CloseButtonText>{`${firstName}`}'s trip</CloseButtonText>
                  <CloseButton onClick={onClose}>
                    <CloseIconImage src={CloseIcon} alt="Close" />
                  </CloseButton>
                </CloseButtonContainer>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                  <Container>
                    <ModalTransferDetails>
                      <TransfersContainer>
                        <TransferDetails>
                          <Date>July 01</Date>
                          <BarUnderDate />
                          <LocationWrapper>
                            <LocationArrow>
                              <FillIconStyled
                                src={FillIcon}
                                alt="Fill icon"
                              ></FillIconStyled>
                              <ArrowDownStyled
                                src={ArrowDotted}
                                alt="Arrow down"
                              />
                              <FillIconStyled
                                src={FillIcon}
                                alt="Fill icon"
                              ></FillIconStyled>
                            </LocationArrow>
                            <LocationInfoWrapper>
                              <LocationInfo>
                                <h4>{`${fromLocationTitle}`}</h4>
                                <p>{`${formatTime(fromDatetime)}`}</p>
                              </LocationInfo>
                              <LocationAddress>{`${fromLocationAddress}`}</LocationAddress>
                              <LocationInfo>
                                <h4>{`${toLocationTitle}`}</h4>
                                <p>{`${formatTime(toDatetime)}`}</p>
                              </LocationInfo>
                              <LocationAddress>{`${toLocationAddress}`}</LocationAddress>
                            </LocationInfoWrapper>
                          </LocationWrapper>
                        </TransferDetails>
                      </TransfersContainer>
                      <TransfersDetailsRectangle
                        opportunities={opportunities}
                      />
                      <TransfersDetailsFlightStatus
                        flightNumber={flightStatus?.number}
                        flightTime={flightStatus?.time}
                        flightStatus={flightStatus?.status}
                      />
                    </ModalTransferDetails>
                    <HorizontalLine />
                    <h3>Your Guest</h3>
                    <YourGuest>
                      <GuestImageWrapper>
                        <GuestImage
                          src={`${photo}`}
                          alt="Traveler photo"
                          aria-hidden="true"
                        />
                      </GuestImageWrapper>
                      <GuestInfoWrapper>
                        <Name>
                          {`${firstName}`} {`${lastName}`}
                        </Name>
                        <PhoneAndCountry>{`${phoneNumber}`}</PhoneAndCountry>
                        <PhoneAndCountry>From {`${country}`}</PhoneAndCountry>
                        <ShortHorizontalLine />
                        <PhoneAndCountry>Opportunities</PhoneAndCountry>
                      </GuestInfoWrapper>
                    </YourGuest>
                    <GuestImageWrapper>
                      {babies && (
                        <OpportunitiesTitle>
                          <OpportunityImageModal
                            src={BabyOppotunity}
                            alt="Baby Opportunity"
                            aria-hidden="true"
                          />
                          <p>Baby</p>
                        </OpportunitiesTitle>
                      )}
                      {earlyCheckin && (
                        <OpportunitiesTitle>
                          <OpportunityImageModal
                            src={EarlyCheckInOppotunity}
                            alt="Early Check-In Opportunity"
                            aria-hidden="true"
                          />
                          <p>Early check-in</p>
                        </OpportunitiesTitle>
                      )}
                      {lateCheckout && (
                        <OpportunitiesTitle>
                          <OpportunityImageModal
                            src={LateCheckOutOppotunity}
                            alt="Late Check-Out Opportunity"
                            aria-hidden="true"
                          />
                          <p>Late check-out</p>
                        </OpportunitiesTitle>
                      )}
                    </GuestImageWrapper>
                    <BottomButtonsWrapper>
                      <img src={CallButton} alt="Call Guest" />
                      <img src={MessageButton} alt="Message Guest" />
                    </BottomButtonsWrapper>
                  </Container>
                </ModalContent>
              </MobileTransferDetailsModal>
            </ModalOverlay>
          )}
        </div>
      )}
    </div>
  )
}

export default MobileTransfer
