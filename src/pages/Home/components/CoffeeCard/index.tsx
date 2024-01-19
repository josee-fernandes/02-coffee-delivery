import { useContext } from 'react'
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
import { CartContext, CoffeeKeyType } from '../../../../contexts/CartContext'
import { formatCurrency } from '../../../../utils/currency'
// import { formatCurrency } from '../../../../utils/currency'

export interface CoffeeType {
  id: string
  type: CoffeeKeyType
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
  const { cart, updateCoffeeAmount } = useContext(CartContext)

  const cartCoffee = cart.find((cartCoffee) => cartCoffee.type === coffee.type)!

  const amount = cartCoffee?.amount ?? 0

  function increaseAmount() {
    updateCoffeeAmount({
      ...cartCoffee,
      id: coffee.id,
      type: coffee.type,
      amount: amount + 1,
    })
  }

  function reduceAmount() {
    updateCoffeeAmount({
      ...cartCoffee,
      id: coffee.id,
      type: coffee.type,
      amount: amount - 1,
    })
  }

  const price = formatCurrency(coffee.price, false)

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
          R$ <strong>{price}</strong>
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
