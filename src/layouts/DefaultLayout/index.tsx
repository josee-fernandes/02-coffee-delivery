import { Outlet } from 'react-router-dom'
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
          <img src={logoCoffeeDelivery} alt="Logotipo do Coffee Delivery" />
          <div>
            <NavActions>
              <LocationButton>
                <MapPin size={22} weight="fill" />
                Porto Alegre, RS
              </LocationButton>
              <CartButton title="Visualizar carrinho">
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </NavActions>
          </div>
        </Container>
      </NavContainer>
      <Outlet />
    </LayoutContainer>
  )
}
