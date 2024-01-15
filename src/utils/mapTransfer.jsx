const mapTransfer = (transfer) => {
  return {
    id: transfer.id,
    datetime: transfer.datetime,
    category: transfer.category,
    travelerPhoto: transfer.traveler_photo,
    travelerFirstName: transfer.traveler_first_name,
    travelerLastName: transfer.traveler_last_name,
    locationTitle: transfer.location_title,
    earlyCheckin: transfer.early_checkin,
    lateCheckout: transfer.late_checkout,
    returnTransfer: transfer.return_transfer,
    babies: transfer.babies,
    propertyTitle: transfer.property_title,
  }
}

export default mapTransfer
