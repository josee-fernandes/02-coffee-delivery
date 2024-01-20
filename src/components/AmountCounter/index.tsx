import { Minus, Plus } from 'phosphor-react'
import { AmountCounterContainer, AmountCounterContainerProps } from './styles'

interface AmountCounterProps extends AmountCounterContainerProps {
  amount: number
  onIncreaseAmount: () => void
  onReduceAmount: () => void
}

export function AmountCounter({
  amount,
  onIncreaseAmount,
  onReduceAmount,
  $smallerSize,
}: AmountCounterProps) {
  return (
    <AmountCounterContainer $smallerSize={$smallerSize}>
      <button type="button" onClick={onReduceAmount}>
        <Minus />
      </button>
      <input type="number" value={amount} min={0} max={99} readOnly />
      <button type="button" onClick={onIncreaseAmount}>
        <Plus />
      </button>
    </AmountCounterContainer>
  )
}
