const mapDetails = (transfer) => {
  if (!transfer) {
    return null
  }

  return {
    id: transfer.id,
    fromLocationTitle: transfer.from_location_title,
    fromLocationAddress: transfer.from_location_address,
    fromDatetime: transfer.from_datetime,
    toLocationTitle: transfer.to_location_title,
    toLocationAddress: transfer.to_location_address,
    toDatetime: transfer.to_datetime,
    passengers: transfer.passengers,
    babySeats: transfer.babyseats,
    luggage: transfer.luggage,
    handLuggage: transfer.hand_luggage,
    flightStatus: {
      flightNumber: transfer.flight_number,
      flightTime: transfer.flight_time,
      flightStatus: transfer.flight_status,
    },
    traveler: {
      phoneNumber: transfer.traveler?.phone_number,
      email: transfer.traveler?.email,
      country: transfer.traveler?.country,
    },
  }
}

export default mapDetails
