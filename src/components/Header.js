import styled from 'styled-components'
import Clock from './Clock'

import {ReactComponent as NetworkBar} from '../icons/network-bar.svg'
import {ReactComponent as Wifi} from '../icons/wifi.svg'
import {ReactComponent as Battery} from '../icons/battery.svg'

const StyledHeader = styled.header`
  padding: 0 1.6rem;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.7rem;
`

const IconsBox = styled.div`
  & > :nth-child(2){
    margin: 0 0.5rem;
  }
`

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1.4rem;
`

const Header = () => (
  <StyledHeader>
    <FlexContainer>
      <Clock/>

      <IconsBox>
        <NetworkBar/>
        <Wifi/>
        <Battery/>
      </IconsBox>
    </FlexContainer>

    <Title>Trollbasket</Title>
  </StyledHeader>
)

export default Header;
