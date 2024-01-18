import { Container } from '../../styles/Container'

import {
  OrderInfo,
  OrderInfoContainer,
  OrderInfoIcon,
  OrderInfoItem,
  SuccessContainer,
} from './styles'

import deliverymanImage from '../../assets/deliveryman.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <Container>
        <main>
          <header>
            <h1>Uhu! Pedido confirmado</h1>
            <h3>Agora é só aguardar que logo o café chegará até você</h3>
          </header>
          <OrderInfoContainer>
            <ul>
              <OrderInfoItem>
                <OrderInfoIcon $color="purple">
                  <MapPin />
                </OrderInfoIcon>
                <OrderInfo>
                  <p>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </p>
                  <p>Farrapos - Porto Alegre, RS</p>
                </OrderInfo>
              </OrderInfoItem>
              <OrderInfoItem>
                <OrderInfoIcon $color="yellow">
                  <Timer />
                </OrderInfoIcon>
                <OrderInfo>
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </OrderInfo>
              </OrderInfoItem>
              <OrderInfoItem>
                <OrderInfoIcon $color="orange">
                  <CurrencyDollar />
                </OrderInfoIcon>
                <OrderInfo>
                  <p>Pagamento na entrega</p>
                  <strong>Cartão de crédito</strong>
                </OrderInfo>
              </OrderInfoItem>
            </ul>
          </OrderInfoContainer>
        </main>
        <img src={deliverymanImage} alt="" />
      </Container>
    </SuccessContainer>
  )
}
