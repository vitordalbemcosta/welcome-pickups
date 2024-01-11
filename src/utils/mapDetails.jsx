const mapDetails = (details) => {
  if (!details) {
    return null
  }

  return {
    id: details.id,
    fromLocationTitle: details.from_location_title,
    fromLocationAddress: details.from_location_address,
    fromDatetime: details.from_datetime,
    toLocationTitle: details.to_location_title,
    toLocationAddress: details.to_location_address,
    toDatetime: details.to_datetime,
    passengers: details.passengers,
    babySeats: details.babyseats,
    luggage: details.luggage,
    handLuggage: details.hand_luggage,
    flightStatus: details.flight_status,
    traveler: {
      phoneNumber: details.traveler?.phone_number,
      email: details.traveler?.email,
      country: details.traveler?.country,
    },
  }
}

export default mapDetails
