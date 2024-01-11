import styled from 'styled-components'

export const HomeContainer = styled.div``

interface IntroContainerProps {
  $background: string
}

export const IntroContainer = styled.div<IntroContainerProps>`
  background-image: ${(props) => `url('${props.$background}')`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  height: 34rem;
  display: flex;
  align-items: center;
`

export const IntroContent = styled.header`
  display: flex;

  h1 {
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
  }

  & p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const IntroItems = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  justify-items: start;
`

export const IntroItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  p {
    margin: 0;
    font-size: 1rem;
    display: flex;
    line-height: 130%;
  }
`

const introIconsColors = {
  orange: 'yellow-dark',
  gray: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
}

interface IntroIconProps {
  $color: 'orange' | 'gray' | 'yellow' | 'purple'
}

export const IntroIcon = styled.div<IntroIconProps>`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme[introIconsColors[props.$color]]};
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.background};
  }
`

export const CoffeeListContainer = styled.main`
  padding-top: 2rem;
  padding-bottom: 9.8125rem;
`

export const CoffeeList = styled.ul`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 2.5rem;
`
