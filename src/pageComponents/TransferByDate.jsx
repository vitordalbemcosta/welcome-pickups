import React, { useState } from 'react'
import arrivalData from '../../transfers_details.json'
import departureData from '../../transfers_list.json'
import mapTransfer from '../utils/mapTransfer'
import mapDetails from '../utils/mapDetails'
import styled from 'styled-components'
import { rem } from 'polished'
import BabyOppotunity from '../images/BabyOpportunityIcon.svg'
import EarlyCheckInOppotunity from '../images/EarlyCheckInIcon.svg'
import LateCheckOutOppotunity from '../images/LateCheckoutIcon.svg'
import TransferOppotunity from '../images/TransferIcon.svg'
import TransferDetailsModal from './TransferDetailsModal'
import { breakpoints } from '../breakpoints/index'
import formatDate from '../utils/formatDate'
import MobileTransfer from '../components/MobileTransfer'
import NextPageButton from '../components/NextPageButton'
import determineCategoryImageWeb from '../utils/categoryImage'

const Title = styled.h4`
  color: rgba(45, 59, 78, 0.5);
  font-size: ${rem(12)};
  font-weight: 600;
  line-height: normal;
  margin: 12px 0;
  border-radius: ${rem(16)};

  @media (max-width: ${breakpoints.laptop}) {
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: ${rem(320)};
    height: ${rem(32)};
    flex-shrink: 0;
    background: rgba(45, 59, 78, 0.04);
    padding: ${rem(10)};
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: ${rem(320)};
    height: ${rem(32)};
    flex-shrink: 0;
    background: rgba(45, 59, 78, 0.04);
    padding: ${rem(10)};
  }
`

const TransferContainer = styled.div`
  display: grid;
  grid-template-columns: 4rem 4.4rem 11.49rem 14.7rem 12.3rem 3.45rem 2rem 2rem 2rem;
  height: 100%;
  flex-shrink: 0;
  border-radius: ${rem(6)};
  margin-top: ${rem(20)};
  align-items: center;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 3.5rem 4rem 9.5rem 12.5rem 11rem 3rem 1.6rem 1.6rem 1.6rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

const TransferImage = styled.img`
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: 50%;
  margin-left: ${rem(14)};
`

const OpportunityImage = styled.img`
  width: ${rem(24)};
  height: ${rem(24)};
  border-radius: 50%;
`
const BackgroundWrapper = styled.div`
  width: ${rem(38)};
  height: ${rem(38)};
  background-color: #f4f5f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TransferItem = styled.div`
  height: ${rem(56)};
  width: 135%;
  flex-shrink: 0;
  border-radius: ${rem(6)};
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(45, 59, 78, 0.06);

  @media (max-width: ${breakpoints.laptop}) {
    width: 104%;
  }

  @media (max-width: 1220px) {
    width: 102%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }

  &:hover {
    background: #e3e5e8;
  }
`
const Text = styled.p`
  font-weight: 400;
  color: #2d3b4e;
  font-size: ${rem(14)};
`
const NameText = styled.p`
  font-weight: 500;
  color: #2d3b4e;
  font-size: ${rem(14)};
`
const NextPageButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${rem(25)};
  margin-left: ${rem(284)};

  @media (max-width: ${breakpoints.laptop}) {
    margin-left: ${rem(100)};
  }

  @media (max-width: 1220px) {
    margin-left: ${rem(100)};
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

const TransferByDate = () => {
  const [selectedTransfer, setSelectedTransfer] = useState(null)

  const openModal = (transfer) => {
    setSelectedTransfer(transfer)
  }

  const closeModal = () => {
    setSelectedTransfer(null)
  }

  const allTransfers = departureData.map(mapTransfer)

  const travelerDetails = arrivalData.find(
    (transfer) => transfer.id === selectedTransfer?.id,
  )

  const mappedDetails = mapDetails(travelerDetails)

  const todayData = allTransfers.filter(
    (transfer) => transfer.datetime && transfer.datetime.includes('2023-06-01'),
  )

  const tomorrowData = allTransfers.filter(
    (transfer) => transfer.datetime && transfer.datetime.includes('2023-06-02'),
  )

  const saturdayData = allTransfers.filter(
    (transfer) => transfer.datetime && transfer.datetime.includes('2023-06-03'),
  )

  return (
    <div>
      <TransferDetailsModal
        isOpen={!!selectedTransfer}
        email={mappedDetails?.traveler?.email}
        country={mappedDetails?.traveler?.country}
        closeModal={closeModal}
        transfer={selectedTransfer}
        transferDetails={mappedDetails}
        phoneNumber={mappedDetails?.traveler?.phoneNumber}
      />
      <Title>Today</Title>
      {todayData.map((transfer) => {
        const fullName = `${transfer.travelerFirstName} ${transfer.travelerLastName}`
        return (
          <>
            <TransferItem key={transfer.id} onClick={() => openModal(transfer)}>
              <TransferContainer>
                <TransferImage
                  src={determineCategoryImageWeb(transfer.category)}
                  alt="Status image"
                  aria-hidden="true"
                />
                <TransferImage
                  src={transfer.travelerPhoto}
                  alt="Traveler photo"
                  aria-hidden="true"
                />
                <NameText>{fullName}</NameText>
                <Text>{formatDate(transfer.datetime)}</Text>
                <Text>{transfer.locationTitle}</Text>
                {transfer.babies && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={BabyOppotunity}
                      alt="Baby Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {transfer.earlyCheckin && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={EarlyCheckInOppotunity}
                      alt="Early Check-In Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {transfer.lateCheckout && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={LateCheckOutOppotunity}
                      alt="Late Check-Out Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {transfer.returnTransfer && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={TransferOppotunity}
                      alt="Transfer Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
              </TransferContainer>
            </TransferItem>
            <MobileTransfer
              key={transfer.id}
              transfer={transfer}
              transferDetails={mappedDetails}
              onSelectedTransfer={() => setSelectedTransfer(transfer)}
              phoneNumber={mappedDetails?.traveler?.phoneNumber}
              country={mappedDetails?.traveler.country}
            />
          </>
        )
      })}
      <Title>Tomorrow</Title>
      {tomorrowData.map((transfer) => {
        const fullName = `${transfer.travelerFirstName} ${transfer.travelerLastName}`
        return (
          <>
            <TransferItem key={transfer.id} onClick={() => openModal(transfer)}>
              <TransferContainer>
                <TransferImage
                  src={determineCategoryImageWeb(transfer.category)}
                  alt="Status image"
                  aria-hidden="true"
                />
                <TransferImage
                  src={transfer.travelerPhoto}
                  alt="Traveler photo"
                  aria-hidden="true"
                />
                <NameText>{fullName}</NameText>
                <Text>{formatDate(transfer.datetime)}</Text>
                <Text>{transfer.locationTitle}</Text>
                {transfer.babies && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={BabyOppotunity}
                      alt="Baby Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {transfer.earlyCheckin && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={EarlyCheckInOppotunity}
                      alt="Early Check-In Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {transfer.lateCheckout && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={LateCheckOutOppotunity}
                      alt="Late Check-Out Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {transfer.returnTransfer && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={TransferOppotunity}
                      alt="Transfer Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
              </TransferContainer>
            </TransferItem>
            <MobileTransfer
              key={transfer.id}
              transfer={transfer}
              transferDetails={mappedDetails}
              onSelectedTransfer={() => setSelectedTransfer(transfer)}
              phoneNumber={mappedDetails?.traveler?.phoneNumber}
              country={mappedDetails?.traveler.country}
            />
          </>
        )
      })}
      <Title>Saturday</Title>
      {saturdayData.map((transfer) => {
        const fullName = `${transfer.travelerFirstName} ${transfer.travelerLastName}`
        return (
          <>
            <TransferItem key={transfer.id} onClick={() => openModal(transfer)}>
              <TransferContainer>
                <TransferImage
                  src={determineCategoryImageWeb(transfer.category)}
                  alt="Status image"
                  aria-hidden="true"
                />
                <TransferImage
                  src={transfer.travelerPhoto}
                  alt="Traveler photo"
                  aria-hidden="true"
                />
                <NameText>{fullName}</NameText>
                <Text>{formatDate(transfer.datetime)}</Text>
                <Text>{transfer.locationTitle}</Text>
                {transfer.babies && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={BabyOppotunity}
                      alt="Baby Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {transfer.earlyCheckin && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={EarlyCheckInOppotunity}
                      alt="Early Check-In Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {transfer.lateCheckout && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={LateCheckOutOppotunity}
                      alt="Late Check-Out Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
                {transfer.returnTransfer && (
                  <BackgroundWrapper>
                    <OpportunityImage
                      src={TransferOppotunity}
                      alt="Transfer Opportunity"
                      aria-hidden="true"
                    />
                  </BackgroundWrapper>
                )}
              </TransferContainer>
            </TransferItem>
            <MobileTransfer
              key={transfer.id}
              transfer={transfer}
              transferDetails={mappedDetails}
              onSelectedTransfer={() => setSelectedTransfer(transfer)}
              phoneNumber={mappedDetails?.traveler?.phoneNumber}
              country={mappedDetails?.traveler.country}
            />
          </>
        )
      })}
      <NextPageButtonsWrapper>
        <NextPageButton onClick={null} />
      </NextPageButtonsWrapper>
    </div>
  )
}

export default TransferByDate
