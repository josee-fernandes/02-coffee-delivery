import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { FinishOrderSchemaType, paymentMethods } from '../Checkout'
import { Container } from '../../styles/Container'

import {
  OrderInfo,
  OrderInfoContainer,
  OrderInfoIcon,
  OrderInfoItem,
  SuccessContainer,
} from './styles'

import deliverymanImage from '../../assets/deliveryman.svg'

export function Success() {
  const location = useLocation()
  const orderInfo = location?.state as FinishOrderSchemaType

  const paymentMethod = paymentMethods[orderInfo.paymentMethod]

  return (
    <SuccessContainer>
      <Container>
        {orderInfo && (
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
                      Entrega em{' '}
                      <strong>
                        {orderInfo.street}, {orderInfo.number}
                        {`, ${orderInfo.complement}`}
                      </strong>
                    </p>
                    <p>
                      {orderInfo.neighborhood} - {orderInfo.city},{' '}
                      {orderInfo.state}
                    </p>
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
                    <strong>{paymentMethod}</strong>
                  </OrderInfo>
                </OrderInfoItem>
              </ul>
            </OrderInfoContainer>
          </main>
        )}
        <img src={deliverymanImage} alt="" />
      </Container>
    </SuccessContainer>
  )
}
