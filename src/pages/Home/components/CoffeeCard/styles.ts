import styled from 'styled-components'

export const CardContainer = styled.li`
  list-style-type: none;
  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.0625rem;
  padding: 0 1.25rem 1.25rem;
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -1.25rem;
  flex: 1;

  & > span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    margin-top: 0.75rem;
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
    text-align: center;
    margin-top: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    margin-top: 0.5rem;
  }
`

export const BuyInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-size: 0.875rem;
    line-height: 130%;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CartButton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => props.theme['purple-dark']};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 150ms;

  &:hover {
    background: ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme['base-card']};
  }
`
