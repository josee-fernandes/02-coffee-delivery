import styled from 'styled-components'

export interface AmountCounterContainerProps {
  smallerSize?: boolean
}

export const AmountCounterContainer = styled.div<AmountCounterContainerProps>`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  ${(props) =>
    props.smallerSize
      ? `padding: 0.34375rem 0.5rem;`
      : `padding: 0.53125rem 0.5rem;`}
  gap: 0.25rem;
  width: max-content;

  button {
    border: none;
    display: flex;
    align-items: center;
    background: transparent;
    border-radius: 6px;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    appearance: textfield;
    -moz-appearance: textfield;

    border: none;
    border-radius: 6px;
    background: transparent;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
    width: 1.25rem;
  }
`
