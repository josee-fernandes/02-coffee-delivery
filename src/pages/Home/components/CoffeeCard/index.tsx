import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import {
  Actions,
  BuyInfo,
  CardContainer,
  CartButton,
  CoffeeInfo,
} from './styles'

import coffeeImage from '../../../../assets/cafe-expresso.png'
import { AmountCounter } from '../../../../components/AmountCounter'

export function CoffeeCard() {
  const [amount, setAmount] = useState(0)

  function increaseAmount() {
    setAmount((oldAmount) => oldAmount + 1)
  }

  function reduceAmount() {
    setAmount((oldAmount) => oldAmount - 1)
  }

  return (
    <CardContainer>
      <CoffeeInfo>
        <img src={coffeeImage} alt="Foto café" />
        <span>TRADICIONAL</span>
        <h3>Expresso tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeInfo>

      <BuyInfo>
        <span>
          R$ <strong>9,90</strong>
        </span>

        <Actions>
          <AmountCounter
            amount={amount}
            onIncreaseAmount={increaseAmount}
            onReduceAmount={reduceAmount}
          />
          <CartButton title="Adicionar ao carrinho">
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </Actions>
      </BuyInfo>
    </CardContainer>
  )
}
