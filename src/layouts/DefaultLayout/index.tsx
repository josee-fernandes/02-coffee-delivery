import { NavLink, Outlet } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import {
  CartButton,
  LayoutContainer,
  LocationButton,
  NavActions,
  NavContainer,
} from './styles'
import { Container } from '../../styles/Container'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <NavContainer>
        <Container>
          <NavLink to="/">
            <img src={logoCoffeeDelivery} alt="Logotipo do Coffee Delivery" />
          </NavLink>
          <div>
            <NavActions>
              <LocationButton>
                <MapPin size={22} weight="fill" />
                Porto Alegre, RS
              </LocationButton>
              <NavLink to="/checkout">
                <CartButton title="Visualizar carrinho">
                  <ShoppingCart size={22} weight="fill" />
                </CartButton>
              </NavLink>
            </NavActions>
          </div>
        </Container>
      </NavContainer>
      <Outlet />
    </LayoutContainer>
  )
}
