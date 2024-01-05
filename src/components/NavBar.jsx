import React, { useState } from 'react'
import styled from 'styled-components'
// import DropdownImage from '../images/Dropdown.svg'
import LogOutImage from '../images/log_out.svg'
import ProfileImage from '../images/profile.svg'

const Nav = styled.nav`
  background-color: #fff;
`

const NavItem = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 70px;
  flex-shrink: 0;
  padding: 0 20px;
  margin: 0 auto;
`

const CollapsableBtnContainer = styled.div`
  display: flex;
  align-items: center;
`

// const CollapsableBtn = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 152px;
//   height: 44px;
//   flex-shrink: 0;
//   padding: 12px 14px;
//   cursor: pointer;
// `

// const RotateImage = styled.img`
//   transition: transform 0.3s ease-in-out;
//   transform: ${({ rotated }) => (rotated ? 'rotate(180deg)' : 'rotate(0)')};
// `

//TODO: ask Artemis if the button above is needed or not?

const RightIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  width: 44px;
  height: 44px;
`

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const NavBar = () => {
  const [isRotated, setRotated] = useState(false)

  const handleButtonClick = () => {
    setRotated(!isRotated)
  }

  const handleLogoutClick = () => {}
  //TODO:fazer alguma funcionalidade para este botao

  const handleProfileClick = () => {}
  //TODO:fazer alguma funcionalidade para este botao tambem

  return (
    <Nav>
      <NavItem>
        <CollapsableBtnContainer>
          {/* <CollapsableBtn onClick={handleButtonClick}>
            <span>Warwick Group</span>
            <RotateImage
              src={DropdownImage}
              alt="Dropdown"
              rotated={isRotated}
            />
          </CollapsableBtn> */}
          <RightIconsContainer>
            <IconButton onClick={handleLogoutClick}>
              <IconImage src={LogOutImage} alt="Logout" />
            </IconButton>
            <IconButton onClick={handleProfileClick}>
              <IconImage src={ProfileImage} alt="Profile" />
            </IconButton>
          </RightIconsContainer>
        </CollapsableBtnContainer>
      </NavItem>
    </Nav>
  )
}

export default NavBar
