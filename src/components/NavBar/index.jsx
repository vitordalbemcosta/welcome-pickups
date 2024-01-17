import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import LogOutImage from '../../images/log_out.svg'
import ProfileImage from '../../images/profile.svg'
import { breakpoints } from '../../breakpoints'

const Nav = styled.nav`
  background-color: #fff;
  max-width: ${rem(1400)};
  display: flex;
  justify-content: right;
  align-items: center;
  height: ${rem(70)};
  flex-shrink: 0;
  margin-left: ${rem(60)};

  @media (max-width: ${breakpoints.laptop}) {
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

const CollapsableBtnContainer = styled.div`
  display: flex;
  align-items: center;
`

const RightIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: ${rem(10)};
  width: ${rem(44)};
  height: ${rem(44)};
`

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const NavBar = () => {
  return (
    <Nav>
      <CollapsableBtnContainer>
        <RightIconsContainer>
          <IconButton>
            <IconImage src={LogOutImage} alt="Logout" aria-hidden="true" />
          </IconButton>
          <IconButton>
            <IconImage src={ProfileImage} alt="Profile" aria-hidden="true" />
          </IconButton>
        </RightIconsContainer>
      </CollapsableBtnContainer>
    </Nav>
  )
}

export default NavBar
