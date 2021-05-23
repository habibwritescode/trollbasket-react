import React from 'react'
import styled from 'styled-components'

import document from '../icons/document.svg'
import fire from '../icons/fire.svg'
import like from '../icons/like.svg'
import shop from '../icons/shop.svg'

const FeaturesBox = styled.div`
  display: grid;
  color: #29394F;
  column-gap: 3.6rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 2.4rem;
  padding: 0 2.5rem 0 2.6rem;
  text-align: center;

  @media only screen and (max-width: 22.5em) {
    grid-template-columns: repeat(auto-fit, minmax(4.8rem, 1fr));
    row-gap: 2rem;
    justify-content: center;
  }
`
const IconBox = styled.div`
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 4.8rem;
  justify-content: center;
  margin-bottom: .4rem;
  width: 4.8rem;

  @media only screen and (max-width: 22.5em) {
    margin: auto;
  }
`
const BlueIconBox = styled(IconBox)`
  background-color: var(--sky-blue);
`
const OrangeIconBox = styled(IconBox)`
  background-color: var(--orange);
`
const PurpleIconBox = styled(IconBox)`
  background-color: #7E42F5;
  margin: 0 auto .4rem;
`
const GreenIconBox = styled(IconBox)`
  background-color: #05944F;
`

const Features = () => {
  return (
    <FeaturesBox>
      <div>
        <BlueIconBox>
          <img src={document} alt="" />
        </BlueIconBox>
        <p>Product categories</p>
      </div>

      <div>
        <OrangeIconBox>
          <img src={fire} alt="" />
        </OrangeIconBox>
        <p>Popular Products</p>
      </div>

      <div>
        <PurpleIconBox>
          <img src={like} alt="" />
        </PurpleIconBox>
        <p>Recommended Products</p>
      </div>
      
      <div>
        <GreenIconBox>
          <img src={shop} alt="" />
        </GreenIconBox>
        <p>Shops</p>
      </div>
    </FeaturesBox>
  )
}

export default Features
