import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import {
  Actions,
  BuyInfo,
  CardContainer,
  CartButton,
  CoffeeAmountCounter,
  CoffeeInfo,
} from './styles'

import coffeeImage from '../../../../assets/cafe-expresso.png'

export function CoffeeCard() {
  const [amount, setAmount] = useState(0)

  function handleIncreaseAmount() {
    setAmount((oldAmount) => oldAmount + 1)
  }

  function handleReduceAmount() {
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
          <CoffeeAmountCounter>
            <button onClick={handleReduceAmount}>
              <Minus />
            </button>
            <input
              type="number"
              value={amount}
              min={0}
              max={99}
              onChange={(event) => setAmount(Number(event.target.value))}
            />
            <button onClick={handleIncreaseAmount}>
              <Plus />
            </button>
          </CoffeeAmountCounter>

          <CartButton title="Adicionar ao carrinho">
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </Actions>
      </BuyInfo>
    </CardContainer>
  )
}
