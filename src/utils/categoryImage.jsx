import ArrivingImage from '../images/ArrivingArrow.svg'
import DepartingImage from '../images/DepartingArrow.svg'
import InCityImage from '../images/InCity.svg'

const determineCategoryImageWeb = (category) => {
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

export default determineCategoryImageWeb
