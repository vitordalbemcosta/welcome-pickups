const mapTransfer = (details) => {
  return {
    id: details.id,
    datetime: details.datetime,
    category: details.category,
    travelerPhoto: details.traveler_photo,
    travelerFirstName: details.traveler_first_name,
    travelerLastName: details.traveler_last_name,
    locationTitle: details.location_title,
    earlyCheckin: details.early_checkin,
    lateCheckout: details.late_checkout,
    returnTransfer: details.return_transfer,
    babies: details.babies,
    propertyTitle: details.property_title,
  }
}

export default mapTransfer
