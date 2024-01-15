const formatTime = (dateString) => {
  try {
    const date = new Date(dateString)

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }

    return date.toLocaleTimeString('en-US', options)
  } catch (error) {
    console.error(`Error formatting time for dateString: ${dateString}`, error)
    return 'Invalid Date'
  }
}

export default formatTime
