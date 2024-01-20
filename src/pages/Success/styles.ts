import styled from 'styled-components'

export const SuccessContainer = styled.div`
  & > div {
    display: flex;
    gap: 6.375rem;
    margin-top: 5rem;
    justify-content: center;
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
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const OrderInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    /* display: flex; */
    line-height: 1.3;
    display: block;
  }
`

const orderIconsColors = {
  orange: 'yellow-dark',
  gray: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
}

interface OrderIconProps {
  $color: keyof typeof orderIconsColors
}

export const OrderInfoIcon = styled.div<OrderIconProps>`
  min-width: 2rem;
  min-height: 2rem;
  background: ${(props) => props.theme[orderIconsColors[props.$color]]};
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.background};
  }
`

export const OrderInfo = styled.div``
