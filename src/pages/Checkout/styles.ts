import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 1.3;
    font-size: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  form {
    input {
      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
      border-radius: 4px;
      padding: 0.75rem;
      border: 1px solid ${(props) => props.theme['base-button']};
      box-shadow: none;

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }

      &:focus {
        border-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`

export const FormWrapper = styled.div`
  display: flex;
  gap: 2rem;
`

export const FormSectionContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  header {
    display: flex;
    gap: 0.5rem;

    strong {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
      margin-top: 0.125rem;
    }
  }
`

export const AddressContainer = styled(FormSectionContainer)`
  margin-top: 0.9375rem;

  header {
    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const AddressInputsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    max-width: 200px;
  }

  input[name='street'] {
    max-width: initial;
  }

  div {
    display: flex;
    gap: 1rem;

    span {
      flex: 1;
      position: relative;

      p {
        content: 'Opcional';
        position: absolute;
        right: 0.75rem;
        top: 0.75rem;
        font-style: italic;
        line-height: 1.3;
        color: ${(props) => props.theme['base-label']};
      }
    }

    input[name='complement'] {
      position: relative;
      max-width: initial;

      &:focus {
        & + p {
          display: none;
        }
      }
    }

    input[name='city'] {
      max-width: initial;
      flex: 1;
    }
  }
`

export const PaymentContainer = styled(FormSectionContainer)`
  margin-top: 0.75rem;

  header {
    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  input[type='radio'] {
    visibility: hidden;
    max-height: 0;
    max-width: 0;
  }

  input[type='radio']:checked + button {
    background: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
  }
`

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const PaymentMethodButton = styled.button`
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border: none;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 150ms;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    line-height: 1.6;
    pointer-events: none;
  }
`

export const SelectedCoffeesContainer = styled.div`
  & > div {
    margin-top: 0.9375rem;
    background: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px 44px 6px;
    width: 26rem;
    height: 31.125rem;
    display: flex;
    flex-direction: column;
  }
`

export const SelectedCoffeesList = styled.ul`
  flex: 1;
  overflow: auto;

  & > li + li {
    border-top: 1px solid ${(props) => props.theme['base-button']};
  }
`

export const PricingInfoTableContainer = styled.div`
  table {
    width: 100%;
    border-top: 1px solid ${(props) => props.theme['base-button']};
    padding-top: 1.5rem;

    tbody {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      tr {
        display: flex;
        justify-content: space-between;
        line-height: 1.3;

        strong {
          color: ${(props) => props.theme['base-subtitle']};
          font-weight: 700;
          font-size: 1.25rem;
        }
      }
    }
  }
`

export const FinishOrderButton = styled.button`
  border: none;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  width: 100%;
  transition: background-color 150ms;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
