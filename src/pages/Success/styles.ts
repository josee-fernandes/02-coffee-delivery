import styled from 'styled-components'

export const SuccessContainer = styled.div`
  & > div {
    display: flex;
    gap: 6.375rem;
    margin-top: 5rem;
  }

  main {
    flex: 1;

    header {
      h1 {
        color: ${(props) => props.theme['yellow-dark']};
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.3;
      }

      h3 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.25rem;
        line-height: 1.3;
      }
    }
  }
`

export const OrderInfoContainer = styled.div`
  margin-top: 2.5rem;
  border-radius: 6px 36px 6px;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.theme.yellow}, ${props.theme.purple})`};
  padding: 1px;

  ul {
    border-radius: 6px 36px 6px;
    background: ${(props) => props.theme.background};
    padding: 2.5rem;
  }
`

export const OrderInfoItem = styled.div``
