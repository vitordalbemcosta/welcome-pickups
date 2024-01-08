import React from 'react'
import arrivalData from '../../transfers_details.json'
import styled from 'styled-components'
import { rem } from 'polished'
import departureData from '../../transfers_list.json'
import ArrivingImage from '../images/Arriving.svg'
import DepartingImage from '../images/Departing.svg'
import InCityImage from '../images/InCity.svg'
import BabyOppotunity from '../images/Baby.svg'
import EarlyCheckInOppotunity from '../images/Early_check_in.svg'
import LateCheckOutOppotunity from '../images/Late_check_out.svg'
import TransferOppotunity from '../images/Transfer.svg'

const Title = styled.h4`
  color: rgba(45, 59, 78, 0.5);
  font-family: 'Museo Sans', sans-serif;
  font-size: ${rem(12)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: ${rem(12)} ${rem(0)};
`

const TransferContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
`

const TransferImage = styled.img`
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: 50%;
`
const OpportunityImage = styled.img`
  width: ${rem(24)};
  height: ${rem(24)};
  border-radius: 50%;
  margin-right: 30px;
`
const TransferItem = styled.div`
  width: ${rem(1130)};
  height: ${rem(56)};
  flex-shrink: 0;
  border-radius: ${rem(6)};
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(45, 59, 78, 0.06);
  margin-bottom: ${rem(10)};
`

const TransferByDate = () => {
  const allTransfers = [...departureData, ...arrivalData]

  const todayData = allTransfers.filter(
    (transfer) => transfer.datetime && transfer.datetime.includes('2023-06-01'),
  )

  const tomorrowData = allTransfers.filter(
    (transfer) => transfer.datetime && transfer.datetime.includes('2023-06-02'),
  )

  const saturdayData = allTransfers.filter(
    (transfer) => transfer.datetime && transfer.datetime.includes('2023-06-03'),
  )

  const formatDate = (dateString) => {
    const date = new Date(dateString)

    const options = {
      weekday: 'long',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric',
    }
    return date.toLocaleDateString('en-US', options)
  }

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
      <Title>Today</Title>
      {todayData.map((transfer) => (
        <TransferItem>
          <TransferContainer>
            <TransferImage
              src={determineCategoryImage(transfer.category)}
              alt="Status image"
              aria-hidden="true"
              style={{ marginLeft: rem(10) }}
            />
            <TransferImage
              src={transfer.traveler_photo}
              alt="Traveler photo"
              aria-hidden="true"
              style={{ marginLeft: rem(20) }}
            />
            <p style={{ marginLeft: rem(120), marginRight: rem(20) }}>
              {formatDate(transfer.datetime)}
            </p>
            <p style={{ marginRight: rem(50) }}>{transfer.location_title}</p>
            {transfer.babies && (
              <OpportunityImage
                src={BabyOppotunity}
                alt="Baby Opportunity"
                aria-hidden="true"
              />
            )}
            {transfer.early_checkin && (
              <OpportunityImage
                src={EarlyCheckInOppotunity}
                alt="Early Check-In Opportunity"
                aria-hidden="true"
              />
            )}
            {transfer.late_checkout && (
              <OpportunityImage
                src={LateCheckOutOppotunity}
                alt="Late Check-Out Opportunity"
                aria-hidden="true"
              />
            )}
            {transfer.return_transfer && (
              <OpportunityImage
                src={TransferOppotunity}
                alt="Transfer Opportunity"
                aria-hidden="true"
              />
            )}
          </TransferContainer>
        </TransferItem>
      ))}

      <Title>Tomorrow</Title>
      {todayData.map((transfer) => (
        <TransferItem key={transfer.id}>
          <TransferContainer>
            <TransferImage
              src={determineCategoryImage(transfer.category)}
              alt="Status image"
              aria-hidden="true"
              style={{ marginLeft: rem(10) }}
            />
            <TransferImage
              src={transfer.traveler_photo}
              alt="Traveler photo"
              aria-hidden="true"
              style={{ marginLeft: rem(20) }}
            />
            <p style={{ marginLeft: rem(120), marginRight: rem(20) }}>
              {formatDate(transfer.datetime)}
            </p>
            <p style={{ marginRight: rem(50) }}>{transfer.location_title}</p>
            {transfer.babies && (
              <OpportunityImage
                src={BabyOppotunity}
                alt="Baby Opportunity"
                aria-hidden="true"
              />
            )}
            {transfer.early_checkin && (
              <OpportunityImage
                src={EarlyCheckInOppotunity}
                alt="Early Check-In Opportunity"
                aria-hidden="true"
              />
            )}
            {transfer.late_checkout && (
              <OpportunityImage
                src={LateCheckOutOppotunity}
                alt="Late Check-Out Opportunity"
                aria-hidden="true"
              />
            )}
            {transfer.return_transfer && (
              <OpportunityImage
                src={TransferOppotunity}
                alt="Transfer Opportunity"
                aria-hidden="true"
              />
            )}
          </TransferContainer>
        </TransferItem>
      ))}

      <Title>Saturday</Title>
      {saturdayData.map((transfer) => (
        <TransferItem>
          <TransferContainer>
            <TransferImage
              src={determineCategoryImage(transfer.category)}
              alt="Status image"
              aria-hidden="true"
              style={{ marginLeft: rem(10) }}
            />
            <TransferImage
              src={transfer.traveler_photo}
              alt="Traveler photo"
              aria-hidden="true"
              style={{ marginLeft: rem(20) }}
            />
            <p style={{ marginLeft: rem(120), marginRight: rem(20) }}>
              {formatDate(transfer.datetime)}
            </p>
            <p style={{ marginRight: rem(50) }}>{transfer.location_title}</p>
            {transfer.babies && (
              <OpportunityImage
                src={BabyOppotunity}
                alt="Baby Opportunity"
                aria-hidden="true"
              />
            )}
            {transfer.early_checkin && (
              <OpportunityImage
                src={EarlyCheckInOppotunity}
                alt="Early Check-In Opportunity"
                aria-hidden="true"
              />
            )}
            {transfer.late_checkout && (
              <OpportunityImage
                src={LateCheckOutOppotunity}
                alt="Late Check-Out Opportunity"
                aria-hidden="true"
              />
            )}
            {transfer.return_transfer && (
              <OpportunityImage
                src={TransferOppotunity}
                alt="Transfer Opportunity"
                aria-hidden="true"
              />
            )}
          </TransferContainer>
        </TransferItem>
      ))}
    </div>
  )
}

export default TransferByDate
