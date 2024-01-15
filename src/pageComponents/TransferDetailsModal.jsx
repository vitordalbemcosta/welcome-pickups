import React from 'react'
import Modal from '../components/Modal'
import styled from 'styled-components'
import { rem } from 'polished'
import Baby from '../images/Baby.svg'
import EarlyCheckIn from '../images/Early_check_in.svg'
import LateCheckOut from '../images/Late_check_out.svg'
import Transfer from '../images/Transfer.svg'
import TransfersDetailsRectangle from '../components/TransfersDetailsRectangle'

const TransferImage = styled.img`
  width: ${rem(83)};
  height: ${rem(83)};
  border-radius: 50%;
  margin-top: ${rem(53)};
  margin-bottom: ${rem(16)};
`

const Name = styled.p`
  font-size: ${rem(18)};
  font-weight: 600;
  line-height: ${rem(22)};
  letter-spacing: 0px;
  color: #2d3b4e;
`

const LastName = styled.p`
  font-size: ${rem(18)};
  font-weight: 600;
  line-height: ${rem(22)};
  letter-spacing: 0px;
  color: #2d3b4e;
  margin-bottom: ${rem(27)};
`

const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailsContainer = styled.div`
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
  }

  p {
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: ${rem(17)};
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: ${rem(32)};
    color: rgba(45, 59, 78, 1);
  }
`

const Wrapper = styled.div`
  display: flex;
`

const VerticalBar = styled.div`
  width: ${rem(1)};
  height: ${rem(666)};
  background-color: rgba(45, 59, 78, 0.08);
  margin-left: ${rem(32)};
  margin-right: ${rem(38)};
`

const Container = styled.div`
  width: ${rem(656)};
  height: ${rem(314)};
  flex-shrink: 0;
  border-radius: ${rem(6)};
  background: rgba(45, 59, 78, 0.03);
  padding: ${rem(20)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${rem(18)};
`

const TransfersContainer = styled.div``

const TransferDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const Date = styled.h6`
  font-size: ${rem(14)};
  font-weight: 600;
  color: #2d3b4e;
  margin-bottom: ${rem(16)};
`

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem(350)};

  p {
    color: rgba(45, 59, 78, 0.5);
    font-size: ${rem(12)};
    font-style: normal;
    font-weight: 400;
    line-height: ${rem(18)};
    margin-top: ${rem(4)};
  }
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
    font-weight: 400;
    line-height: ${rem(21)};
    text-align: left;
  }
`

const Line = styled.div`
  width: ${rem(184)};
  height: ${rem(1)};
  flex-shrink: 0;
  background: rgba(45, 59, 78, 0.08);
  margin-bottom: ${rem(16)};
`

const PhotoAndNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Heading = styled.h3`
  color: #2d3b4e;
  font-size: ${rem(18)};
  font-style: normal;
  font-weight: 600;
  line-height: ${rem(26)};
  color: rgba(45, 59, 78, 1);
  margin-top: ${rem(43)};
`

const OpportunityImage = styled.img`
  width: ${rem(24)};
  height: ${rem(24)};
  border-radius: 50%;
`

//todo: need to find out how to make the formatTime function work here
//todo: need to investigate why icons not coming line 220
const TransferDetailsModal = ({
  isOpen,
  firstName,
  lastName,
  phoneNumber,
  photo,
  email,
  country,
  closeModal,
  fromLocationTitle,
  fromLocationAddress,
  toLocationTitle,
  fromDatetime,
  toLocationAddress,
  toDatetime,
  passengers,
  babySeats,
  luggage,
  handLuggage,
  flightStatus,
  earlyCheckin,
  lateCheckout,
  returnTransfer,
  transfer,
}) => {
  const opportunities = transfer ? transfer.opportunities : []

  return (
    <div>
      {isOpen && (
        <Modal onClose={closeModal}>
          <Wrapper>
            <ClientDetails>
              <PhotoAndNameWrapper>
                <TransferImage
                  src={photo}
                  alt="Traveler photo"
                  aria-hidden="true"
                />
                <Name>{`${firstName}`}</Name>
                <LastName>{`${lastName}`}</LastName>
              </PhotoAndNameWrapper>
              <Line />
              <DetailsContainer>
                <h6>Phone number</h6>
                <p>{`${phoneNumber}`}</p>
                <h6>Email</h6>
                <p>{`${email}`}</p>
                <h6>Coming from</h6>
                <p>{`${country}`}</p>
                <h6>Opportunities</h6>
                {transfer && transfer.babies && (
                  <OpportunityImage
                    src={Baby}
                    alt="Baby Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer && transfer.earlyCheckin && (
                  <OpportunityImage
                    src={EarlyCheckIn}
                    alt="Early Check-In Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer && transfer.lateCheckout && (
                  <OpportunityImage
                    src={LateCheckOut}
                    alt="Late Check-Out Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer && transfer.returnTransfer && (
                  <OpportunityImage
                    src={Transfer}
                    alt="Transfer Opportunity"
                    aria-hidden="true"
                  />
                )}
              </DetailsContainer>
            </ClientDetails>
            <VerticalBar />
            <div>
              <Heading>Transfers</Heading>
              <Container>
                <TransfersContainer>
                  <TransferDetails>
                    <Date>July 01</Date>
                    <LocationWrapper>
                      <LocationInfo>
                        <h4>{`${fromLocationTitle}`}</h4>
                        <p>{`${fromDatetime}`}</p>
                      </LocationInfo>
                      <p>{`${fromLocationAddress}`}</p>
                      <LocationInfo>
                        <h4>{`${toLocationTitle}`}</h4>
                        <p>{`${toDatetime}`}</p>
                      </LocationInfo>
                      <p>{`${toLocationAddress}`}</p>
                    </LocationWrapper>
                  </TransferDetails>
                </TransfersContainer>
                <TransfersDetailsRectangle opportunities={opportunities} />
              </Container>
            </div>
          </Wrapper>
        </Modal>
      )}
    </div>
  )
}

export default TransferDetailsModal
