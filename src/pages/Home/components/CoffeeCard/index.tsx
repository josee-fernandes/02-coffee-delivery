import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import {
  Actions,
  BuyInfo,
  CardContainer,
  CartButton,
  CoffeeInfo,
  CoffeeTags,
} from './styles'

import { AmountCounter } from '../../../../components/AmountCounter'

export interface CoffeeType {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

interface CoffeeCardProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
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
        <img src={coffee.image} alt="Foto café" />
        <CoffeeTags>
          {coffee.tags.map((tag) => (
            <li key={coffee.id + tag}>
              <span>{tag}</span>
            </li>
          ))}
        </CoffeeTags>

        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </CoffeeInfo>

      <BuyInfo>
        <span>
          R$ <strong>{coffee.price}</strong>
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
