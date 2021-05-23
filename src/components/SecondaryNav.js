import styled from 'styled-components'

import {ReactComponent as MapMarker} from '../icons/map-marker.svg'
import {ReactComponent as ArrowDown} from '../icons/arrow-down.svg'
import {ReactComponent as Package} from '../icons/package.svg'
import {ReactComponent as Cart} from '../icons/cart.svg'

const NavList = styled.ul`
  display: grid;
  border-bottom: 1px solid var(--grey);
  border-top: 1px solid var(--grey);
  display: grid;
  font-size: 1.2rem;
  grid-template-columns: 12.5rem 14.1rem 10.9rem;
  row-gap: 1.5rem;
  list-style: none;
  margin-bottom: 1.4rem;
  padding: 1.1rem 0 1rem;

  @media only screen and (max-width:22.5em){
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const ListItem = styled.li`
  align-items: center;
  display: flex;
`

const ListItemLocation = styled(ListItem)`
  padding-left: 1.9rem;

  @media only screen and (max-width:22.5em){
    padding-left: 0;
  }
`
const ListItemOrders = styled(ListItem)`
  border-left: 1px solid var(--grey);
  border-right: 1px solid var(--grey);
  padding-left: 2.6rem;

  @media only screen and (max-width:22.5em){
    padding-left: 0;
    border: none;
  }
`
const ListItemCart = styled(ListItem)`
  padding-left: 1.9rem;

  @media only screen and (max-width:22.5em){
    padding-left: 0;
  }
`

const IconBox = styled.div`
  align-items: center;
  background-color: var(--grey);
  border-radius: 50%;
  display: flex;
  height: 2.4rem;
  justify-content: center;
  position: relative;
  width: 2.4rem;
`

const LocationText = styled.span`
  margin: 0 1.2rem 0 .5rem;
`

const OrdersText = styled.span`
  margin-left: 0.8rem;
`

const CartText = styled.span`
  margin-left: 1.4rem;
`

const CartTotal = styled.span`
  align-items: center;
  background-color: var(--orange);
  border-radius: 50%;
  bottom: 1.2rem;
  color: var(--white);
  display: flex;
  font-size: 1rem;
  height: 1.6rem;
  justify-content: center;
  left: 1.5rem;
  position: absolute;
  width: 1.6rem;
`

const SecondaryNav = () => {
  return (
    <nav>
      <NavList>
        <ListItemLocation>
          <IconBox>
            <MapMarker/>
          </IconBox>
          <LocationText>Lagos</LocationText>
          <ArrowDown/>
        </ListItemLocation>
        
        <ListItemOrders>
          <IconBox>
            <Package/>
          </IconBox>
          <OrdersText>My Orders</OrdersText>
        </ListItemOrders>

        <ListItemCart>
          <IconBox>
            <Cart/>
            <CartTotal>9</CartTotal>
          </IconBox>
        <CartText>Cart</CartText>
        </ListItemCart>
      </NavList>
    </nav>
  )
}

export default SecondaryNav
