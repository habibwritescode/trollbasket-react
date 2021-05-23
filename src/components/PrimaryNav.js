import styled from 'styled-components'

import home from '../icons/home.svg'
import cart from '../icons/cart-2.svg'
import priceTag from '../icons/price-tag.svg'
import wallet from '../icons/wallet.svg'
import menu from '../icons/menu.svg'

const NavBox = styled.nav`
  background-color: var(--white);
  bottom: 0;
  color: #718596;
  font-size: 1.2rem;
  padding: 0 1.44rem 1.4rem 3.1rem;
  position: fixed;
  text-align: center;
  max-width: 37.5rem;

  @media only screen and (max-width: 20.43em){
    padding-left: 1.44rem;
  }
`

const NavList = styled.ul`
display: grid;
  column-gap: 3.5rem;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;

  @media only screen and (max-width: 20.43em){
    column-gap: 2rem;
  }
`

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1.9rem;
  transition: all .1s;

  &:hover{
    border-top: 2px solid var(--sky-blue);
    color: var(--sky-blue);
    cursor: pointer;
  }

  :hover > .list-icon{
  filter: brightness(0) saturate(100%) invert(53%) sepia(62%) saturate(5859%) hue-rotate(201deg) brightness(99%) contrast(105%);
}
`
const NavItemBuy = styled(NavItem)`
  border-top: 2px solid var(--sky-blue);
  color: var(--sky-blue);
`

const Image = styled.img`
  display: block;
  margin: 0 auto 1rem;
`

const PrimaryNav = () => {
  return (
    <NavBox>
      <NavList>
        <NavItem>
          <Image className='list-icon' src={home} alt="" />
          Home
        </NavItem>

        <NavItemBuy>
          <Image className='list-icon' src={cart} alt="" />
          Buy
        </NavItemBuy>

        <NavItem>
          <Image className='list-icon' src={priceTag} alt="" />
          Deals
        </NavItem>

        <NavItem>
          <Image className='list-icon' src={wallet} alt="" />
          Wallet
        </NavItem>

        <NavItem>
          <Image className='list-icon' src={menu} alt="" />
          More
        </NavItem>
      </NavList>
    </NavBox>
  )
}

export default PrimaryNav
