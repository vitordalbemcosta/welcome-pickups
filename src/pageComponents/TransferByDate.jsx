// YourComponent.jsx
import React from 'react'
import arrivalData from '../../transfers_details.json'
import departureData from '../../transfers_list.json'

const TransferByDate = () => {
  const allTransfers = [...departureData, ...arrivalData]

  const todayData = allTransfers.filter(
    (transfer) => transfer.datetime && transfer.datetime.includes('2023-06-03'),
  )

  const tomorrowData = allTransfers.filter(
    (transfer) => transfer.datetime && transfer.datetime.includes('2023-06-04'),
  )

  const thursdayData = allTransfers.filter(
    (transfer) => transfer.datetime && transfer.datetime.includes('2023-06-02'),
  )

  // adicionar a estilizacao do figma
  // fazer um details para quando onclick em cada transfer
  return (
    <div>
      <h2>Today</h2>
      {todayData.map((transfer) => (
        <div key={transfer.id}>
          <p>{transfer.datetime}</p>
          <p>{transfer.location_title}</p>
        </div>
      ))}

      <h2>Tomorrow</h2>
      {tomorrowData.map((transfer) => (
        <div key={transfer.id}>
          <p>{transfer.datetime}</p>
          <p>{transfer.location_title}</p>
        </div>
      ))}

      <h2>Thursday</h2>
      {thursdayData.map((transfer) => (
        <div key={transfer.id}>
          <p>{transfer.datetime}</p>
          <p>{transfer.location_title}</p>
        </div>
      ))}
    </div>
  )
}

export default TransferByDate
