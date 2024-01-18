import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

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
import { Container } from '../../styles/Container'
import { CoffeeType, CoffeeCard } from './components/CoffeeCard'

import introImage from '../../assets/intro-image.png'
import introBackgroundImage from '../../assets/intro-background.png'

import traditionalEspressoImage from '../../assets/cafe-expresso.png'
import americanEspressoImage from '../../assets/cafe-americano.png'
import creamyEspressoImage from '../../assets/cafe-expresso-cremoso.png'
import icedEspressoImage from '../../assets/cafe-gelado.png'
import coffeeWithMilkImage from '../../assets/cafe-com-leite.png'
import latteImage from '../../assets/latte.png'
import capuccinoImage from '../../assets/capuccino.png'
import macchiatoCoffeeImage from '../../assets/cafe-macchiato.png'
import mocaccinoImage from '../../assets/mocaccino.png'
import hotChocolateImage from '../../assets/chocolate-quente.png'
import cubanCoffeeImage from '../../assets/cafe-cubano.png'
import hawaiianCoffeeImage from '../../assets/cafe-havaiano.png'
import arabicCoffeeImage from '../../assets/cafe-arabe.png'
import irishCoffeeImage from '../../assets/cafe-irlandes.png'

const coffees: CoffeeType[] = [
  {
    id: uuidv4(),
    image: traditionalEspressoImage,
    tags: ['TRADICIONAL'],
    name: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: americanEspressoImage,
    tags: ['TRADICIONAL'],
    name: 'Expresso americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: creamyEspressoImage,
    tags: ['TRADICIONAL'],
    name: 'Expresso cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: icedEspressoImage,
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: coffeeWithMilkImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: latteImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: capuccinoImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: macchiatoCoffeeImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: mocaccinoImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: hotChocolateImage,
    tags: ['ESPECIAL'],
    name: 'Chocolate Quente',
    description: 'Bebida com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: cubanCoffeeImage,
    tags: ['ESPECIAL', 'COM LEITE'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: hawaiianCoffeeImage,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Havaiano',
    description: 'Bebida adocicado preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: arabicCoffeeImage,
    tags: ['ESPECIAL'],
    name: 'Arabic',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: irishCoffeeImage,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

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
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </CoffeeList>
        </Container>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
