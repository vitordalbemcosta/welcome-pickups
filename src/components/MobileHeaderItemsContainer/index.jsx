import React from 'react'
import styled from 'styled-components'
import MobileHeaderItem from '../MobileHeaderItems'
import LiveView from '../../images/Live_view.svg'
import Scheduled from '../../images/Scheduled.svg'
import InCity from '../../images/Statistics.svg'
import Revenue from '../../images/Revenue.svg'
import Settings from '../../images/Settings.svg'
import { rem } from 'polished'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: ${rem(20)};
  margin: 26px 0;
`

const HorizontalLine = styled.div`
  width: ${rem(210)};
  height: 1px;
  flex-shrink: 0;
  background: rgba(45, 59, 78, 0.08);
  margin: ${rem(32)} 0;
`

const MobileHeaderItemsContainer = () => {
  const items = [
    { imageSrc: LiveView, text: 'Live view' },
    { imageSrc: Scheduled, text: 'Scheduled' },
    { imageSrc: InCity, text: 'Statistics' },
    { imageSrc: Revenue, text: 'Revenue' },
    { imageSrc: Settings, text: 'Settings' },
  ]

  return (
    <Container>
      {items.map((item, index) => (
        <MobileHeaderItem key={index} {...item} />
      ))}
      <HorizontalLine />
    </Container>
  )
}

export default MobileHeaderItemsContainer
