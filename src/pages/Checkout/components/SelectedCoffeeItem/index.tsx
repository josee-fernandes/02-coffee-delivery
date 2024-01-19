import { useContext } from 'react'
import { Trash } from 'phosphor-react'
import { AmountCounter } from '../../../../components/AmountCounter'
import {
  RemoveCoffeeButton,
  SelectedCoffeeItemActions,
  SelectedCoffeeItemContainer,
  SelectedCoffeeItemInfo,
} from './styles'
import { CoffeeType } from '../../../Home/components/CoffeeCard'
import { CartContext } from '../../../../contexts/CartContext'
import { formatCurrency } from '../../../../utils/currency'

interface SelectedCoffeeItemProps {
  coffee: CoffeeType
}

export function SelectedCoffeeItem({ coffee }: SelectedCoffeeItemProps) {
  const { cart, updateCoffeeAmount, removeCoffee } = useContext(CartContext)

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

  function handleRemoveCoffee() {
    removeCoffee(coffee.id)
  }

  const price = formatCurrency(cartCoffee.price)

  return (
    <SelectedCoffeeItemContainer>
      <img src={coffee.image} alt="" />
      <div>
        <SelectedCoffeeItemInfo>
          <p>{coffee.name}</p>
          <strong>{price}</strong>
        </SelectedCoffeeItemInfo>
        <SelectedCoffeeItemActions>
          <AmountCounter
            amount={amount}
            onIncreaseAmount={increaseAmount}
            onReduceAmount={reduceAmount}
            $smallerSize
          />
          <RemoveCoffeeButton onClick={handleRemoveCoffee}>
            <Trash />
            REMOVER
          </RemoveCoffeeButton>
        </SelectedCoffeeItemActions>
      </div>
    </SelectedCoffeeItemContainer>
  )
}
