import {
  CoffeeList,
  CoffeeListContainer,
  HomeContainer,
  IntroContainer,
  IntroContent,
  IntroIcon,
  IntroItem,
  IntroItems,
} from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Container } from '../../styles/Container'

import introImage from '../../assets/intro-image.png'
import introBackgroundImage from '../../assets/intro-background.png'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer $background={introBackgroundImage}>
        <Container>
          <IntroContent>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
              <IntroItems>
                <IntroItem>
                  <IntroIcon $color="orange">
                    <ShoppingCart size={16} weight="fill" />
                  </IntroIcon>
                  <p>Compra simples e segura</p>
                </IntroItem>
                <IntroItem>
                  <IntroIcon $color="gray">
                    <Package size={16} weight="fill" />
                  </IntroIcon>
                  <p>Embalagem mantém o café intacto</p>
                </IntroItem>
                <IntroItem>
                  <IntroIcon $color="yellow">
                    <Timer size={16} weight="fill" />
                  </IntroIcon>
                  <p>Entrega rápida e rastreada</p>
                </IntroItem>
                <IntroItem>
                  <IntroIcon $color="purple">
                    <Coffee size={16} weight="fill" />
                  </IntroIcon>
                  <p>O café chega fresquinho até você</p>
                </IntroItem>
              </IntroItems>
            </div>
            <img src={introImage} alt="Imagem de introdução com café e grãos" />
          </IntroContent>
        </Container>
      </IntroContainer>
      <CoffeeListContainer>
        <Container>
          <h2>Nossos cafés</h2>
          <CoffeeList>
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
          </CoffeeList>
        </Container>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
