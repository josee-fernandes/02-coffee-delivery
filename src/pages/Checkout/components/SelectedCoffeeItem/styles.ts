import styled from 'styled-components'

export const SelectedCoffeeItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem 0;

  img {
    max-width: 64px;
    width: 100%;
  }

  & > div {
    flex: 1;
  }
`

export const SelectedCoffeeItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  strong {
    line-height: 1.3;
    font-size: 700;
  }
`
export const SelectedCoffeeItemActions = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`

export const RemoveCoffeeButton = styled.button`
  border: none;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  transition: background-color 150ms;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.25rem;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
