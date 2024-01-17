import { Container } from '../../styles/Container'

import { OrderInfoContainer, OrderInfoItem, SuccessContainer } from './styles'

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
                <MapPin />
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </OrderInfoItem>
              <OrderInfoItem>
                <Timer />
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </OrderInfoItem>
              <OrderInfoItem>
                <CurrencyDollar />
                <p>Pagamento na entrega</p>
                <strong>Cartão de crédito</strong>
              </OrderInfoItem>
            </ul>
          </OrderInfoContainer>
        </main>
        <img src={deliverymanImage} alt="" />
      </Container>
    </SuccessContainer>
  )
}
