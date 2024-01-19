import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme.background};
  width: 100%;
`

export const NavContainer = styled.nav`
  width: 100%;
  padding: 2.0625rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const BaseButton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LocationButton = styled(BaseButton)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

interface CartButtonProps {
  $cartItemsAmount: number
}

export const CartButton = styled(BaseButton)<CartButtonProps>`
  background: ${(props) => props.theme['yellow-light']};
  position: relative;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
  }

  ${(props) =>
    props.$cartItemsAmount > 0 &&
    `
      &::after {
        content: '${props.$cartItemsAmount}';
        width: 1.25rem;
        height: 1.25rem;
        background: ${props.theme['yellow-dark']};
        border-radius: 9999px;
        position: absolute;
        right: -0.625rem;
        top: -0.625rem;
        color: ${props.theme.white};
        font-weight: 700;
        font-size: 0.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}
`
