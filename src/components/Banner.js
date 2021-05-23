import styled from 'styled-components'
import BgImage from '../images/bg-image.svg'

const BannerBox = styled.div`
  margin: 0 0.5rem 2.9rem;
`

const BannerBoxInner = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > *{
    scroll-snap-align: center;  
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

const BannerItem = styled.div`
  align-items: center;
  border-radius: 4px;
  color: var(--white);
  display: flex;
  flex:0 0 31.8rem;
  height: 12.3rem;
  justify-content: space-between;
  padding: 0 2.4rem;

  &:nth-child(2){
    margin: 0 .8rem;
  }

  @media only screen and (max-width:22.5em){
    flex: 0 0 85vw;
  }
`

const SkyBlueBannerItem = styled(BannerItem)`
  background-color: var(--sky-blue);
`
const DeepBlueBannerItem = styled(BannerItem)`
  background: url(${BgImage}) no-repeat center;
`
const OrangeBannerItem = styled(BannerItem)`
  background-color: var(--orange);
`
const BannerItemText = styled.p`
  font-size: 1.2rem;
  max-width: 14.8rem;
`
const OrangeBannerText = styled(BannerItemText)`
  color: var(--orange);
`

const DeepBlueBannerText = styled(BannerItemText)`
  color: #003277;
`

const BannerItemBtn = styled.button`
  background-color: var(--sky-blue);
  border: none;
  border-radius: 4px;
  color: var(--white);
  flex: 0 0 9.1rem;
  font-family: inherit;
  font-size: 1rem;
  height: 3.1rem;

  &:hover{
    cursor: pointer;
  }

  @media only screen and (max-width:22.5em){
    flex: 0 0 7rem;
  }
`

const DeepBlueBannerItemBtn = styled(BannerItemBtn)`
  background-color: #003277;
`

const SkyBlueBannerItemBtn = styled(BannerItemBtn)`
  background-color: var(--sky-blue);
`


const Banner = () => {
  return (
    <BannerBox>
      <BannerBoxInner>
        <SkyBlueBannerItem>
          <BannerItemText>Need to update your shipping <DeepBlueBannerText as='span'>address</DeepBlueBannerText>?</BannerItemText>
          <DeepBlueBannerItemBtn>Go Here</DeepBlueBannerItemBtn>
        </SkyBlueBannerItem>

        <DeepBlueBannerItem>
          <BannerItemText>Having any <OrangeBannerText as='span'>issues</OrangeBannerText> with your order?</BannerItemText>
          <SkyBlueBannerItemBtn>Contact Us</SkyBlueBannerItemBtn>
        </DeepBlueBannerItem>

        <OrangeBannerItem>
          <BannerItemText>Want to <DeepBlueBannerText as='span'>track</DeepBlueBannerText> your shipment?</BannerItemText>
          <DeepBlueBannerItemBtn>Check Here</DeepBlueBannerItemBtn>
        </OrangeBannerItem>
      </BannerBoxInner>
    </BannerBox>
  )
}

export default Banner
