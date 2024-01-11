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

export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme['yellow-light']};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
