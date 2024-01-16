import React, { useState } from 'react'
import arrivalData from '../../transfers_details.json'
import departureData from '../../transfers_list.json'
import mapTransfer from '../utils/mapTransfer'
import mapDetails from '../utils/mapDetails'
import styled from 'styled-components'
import { rem } from 'polished'
import ArrivingImage from '../images/Arriving.svg'
import DepartingImage from '../images/Departing.svg'
import InCityImage from '../images/InCity.svg'
import BabyOppotunity from '../images/Baby.svg'
import EarlyCheckInOppotunity from '../images/Early_check_in.svg'
import LateCheckOutOppotunity from '../images/Late_check_out.svg'
import TransferOppotunity from '../images/Transfer.svg'
import TransferDetailsModal from './TransferDetailsModal'
import { breakpoints } from '../breakpoints/index'
import formatDate from '../utils/formatDate'
import MobileTransfer from '../components/MobileTransfer'

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
  grid-template-columns: 4rem 4.4rem 11.49rem 14.7rem 12.3rem 2.45rem 2rem 2rem 2rem;
  height: ${rem(34)};
  flex-shrink: 0;
  border-radius: ${rem(6)};
  margin-top: ${rem(20)};

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 3.5rem 4rem 9.5rem 12.5rem 11rem 2rem 1.6rem 1.6rem 1.6rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 3rem 3.9rem 9rem 11.8rem 9.8rem 1.8rem 1.5rem 1.5rem 1.5rem;
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
  margin-top: ${rem(8)};
  margin-left: ${rem(14)};
`
const OpportunityImage = styled.img`
  width: ${rem(24)};
  height: ${rem(24)};
  border-radius: 50%;
  margin-top: ${rem(16)};
`
const TransferItem = styled.div`
  height: ${rem(56)};
  width: 119.3%;
  flex-shrink: 0;
  border-radius: ${rem(6)};
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(45, 59, 78, 0.06);
  @media (max-width: ${breakpoints.laptop}) {
    width: 104%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`
const Text = styled.p`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: left;
  align-content: stretch;
  margin-top: ${rem(8)};
  font-weight: 400;
  color: #2d3b4e;
  font-size: ${rem(14)};
`
const NameText = styled.p`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: left;
  align-content: stretch;
  margin-top: ${rem(8)};
  font-weight: 500;
  color: #2d3b4e;
  font-size: ${rem(14)};
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

  const determineCategoryImage = (category) => {
    switch (category) {
      case 'Arrival':
        return ArrivingImage
      case 'Departure':
        return DepartingImage
      case 'In City':
        return InCityImage
      default:
        return null
    }
  }

  return (
    <div>
      <TransferDetailsModal
        isOpen={!!selectedTransfer}
        photo={selectedTransfer?.travelerPhoto}
        firstName={selectedTransfer?.travelerFirstName}
        lastName={selectedTransfer?.travelerLastName}
        phoneNumber={mappedDetails?.traveler?.phoneNumber}
        email={mappedDetails?.traveler?.email}
        country={mappedDetails?.traveler?.country}
        closeModal={closeModal}
        fromLocationTitle={mappedDetails?.fromLocationTitle}
        fromDatetime={mappedDetails?.fromDatetime}
        toLocationTitle={mappedDetails?.toLocationTitle}
        toDatetime={mappedDetails?.toDatetime}
        fromLocationAddress={mappedDetails?.fromLocationAddress}
        toLocationAddress={mappedDetails?.toLocationAddress}
        babySeats={mappedDetails?.babySeats}
        earlyCheckin={mappedDetails?.earlyCheckin}
        lateCheckout={mappedDetails?.lateCheckout}
        returnTransfer={mappedDetails?.returnTransfer}
        transfer={selectedTransfer}
        handLuggage={mappedDetails?.handLuggage}
        luggage={mappedDetails?.luggage}
        passengers={mappedDetails?.passengers}
        flightStatus={mappedDetails?.flightStatus}
      />
      <Title>Today</Title>
      {todayData.map((transfer) => {
        const fullName = `${transfer.travelerFirstName} ${transfer.travelerLastName}`
        return (
          <>
            <TransferItem key={transfer.id} onClick={() => openModal(transfer)}>
              <TransferContainer>
                <TransferImage
                  src={determineCategoryImage(transfer.category)}
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
                  <OpportunityImage
                    src={BabyOppotunity}
                    alt="Baby Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer.earlyCheckin && (
                  <OpportunityImage
                    src={EarlyCheckInOppotunity}
                    alt="Early Check-In Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer.lateCheckout && (
                  <OpportunityImage
                    src={LateCheckOutOppotunity}
                    alt="Late Check-Out Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer.returnTransfer && (
                  <OpportunityImage
                    src={TransferOppotunity}
                    alt="Transfer Opportunity"
                    aria-hidden="true"
                  />
                )}
              </TransferContainer>
            </TransferItem>
            <MobileTransfer
              key={transfer.id}
              onClick={() => openModal(transfer)}
              firstName={transfer.travelerFirstName}
              lastName={transfer.travelerLastName}
              photo={transfer.travelerPhoto}
              fromLocationTitle={transfer.locationTitle}
              fromDatetime={transfer.datetime}
              propertyTitle={transfer.propertyTitle}
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
                  src={determineCategoryImage(transfer.category)}
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
                  <OpportunityImage
                    src={BabyOppotunity}
                    alt="Baby Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer.earlyCheckin && (
                  <OpportunityImage
                    src={EarlyCheckInOppotunity}
                    alt="Early Check-In Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer.lateCheckout && (
                  <OpportunityImage
                    src={LateCheckOutOppotunity}
                    alt="Late Check-Out Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer.returnTransfer && (
                  <OpportunityImage
                    src={TransferOppotunity}
                    alt="Transfer Opportunity"
                    aria-hidden="true"
                  />
                )}
              </TransferContainer>
            </TransferItem>
            <MobileTransfer
              key={transfer.id}
              onClick={() => openModal(transfer)}
              firstName={transfer.travelerFirstName}
              lastName={transfer.travelerLastName}
              photo={transfer.travelerPhoto}
              fromLocationTitle={transfer.locationTitle}
              fromDatetime={transfer.datetime}
              propertyTitle={transfer.propertyTitle}
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
                  src={determineCategoryImage(transfer.category)}
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
                  <OpportunityImage
                    src={BabyOppotunity}
                    alt="Baby Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer.earlyCheckin && (
                  <OpportunityImage
                    src={EarlyCheckInOppotunity}
                    alt="Early Check-In Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer.lateCheckout && (
                  <OpportunityImage
                    src={LateCheckOutOppotunity}
                    alt="Late Check-Out Opportunity"
                    aria-hidden="true"
                  />
                )}
                {transfer.returnTransfer && (
                  <OpportunityImage
                    src={TransferOppotunity}
                    alt="Transfer Opportunity"
                    aria-hidden="true"
                  />
                )}
              </TransferContainer>
            </TransferItem>
            <MobileTransfer
              key={transfer.id}
              onClick={() => openModal(transfer)}
              firstName={transfer.travelerFirstName}
              lastName={transfer.travelerLastName}
              photo={transfer.travelerPhoto}
              fromLocationTitle={transfer.locationTitle}
              fromDatetime={transfer.datetime}
              propertyTitle={transfer.propertyTitle}
            />
          </>
        )
      })}
    </div>
  )
}

export default TransferByDate
