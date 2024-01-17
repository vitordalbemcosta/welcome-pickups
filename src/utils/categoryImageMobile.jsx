import ArrivingMobile from '../images/ArrivingMobile.svg'
import DepartingMobile from '../images/DepartingMobile.svg'

const determineCategoryImageMobile = (category) => {
  switch (category) {
    case 'Arrival':
      return ArrivingMobile
    case 'Departure':
      return DepartingMobile
    case 'In City':
      return ArrivingMobile
    default:
      return null
  }
}

export default determineCategoryImageMobile
