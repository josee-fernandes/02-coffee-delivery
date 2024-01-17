import { Trash } from 'phosphor-react'
import { AmountCounter } from '../../../../components/AmountCounter'
import {
  RemoveCoffeeButton,
  SelectedCoffeeItemActions,
  SelectedCoffeeItemContainer,
  SelectedCoffeeItemInfo,
} from './styles'

import coffeeImage from '../../../../assets/cafe-expresso.png'

export function SelectedCoffeeItem() {
  function increaseAmount() {}

  function reduceAmount() {}

  return (
    <SelectedCoffeeItemContainer>
      <img src={coffeeImage} alt="Foto café" />
      <div>
        <SelectedCoffeeItemInfo>
          <p>Expresso tradicional</p>
          <strong>R$ 9,90</strong>
        </SelectedCoffeeItemInfo>
        <SelectedCoffeeItemActions>
          <AmountCounter
            amount={0}
            onIncreaseAmount={increaseAmount}
            onReduceAmount={reduceAmount}
            smallerSize
          />
          <RemoveCoffeeButton>
            <Trash />
            REMOVER
          </RemoveCoffeeButton>
        </SelectedCoffeeItemActions>
      </div>
    </SelectedCoffeeItemContainer>
  )
}
