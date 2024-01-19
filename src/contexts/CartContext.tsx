import { ReactNode, createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import traditionalEspressoImage from '../assets/cafe-expresso.png'
import americanEspressoImage from '../assets/cafe-americano.png'
import creamyEspressoImage from '../assets/cafe-expresso-cremoso.png'
import icedEspressoImage from '../assets/cafe-gelado.png'
import coffeeWithMilkImage from '../assets/cafe-com-leite.png'
import latteImage from '../assets/latte.png'
import capuccinoImage from '../assets/capuccino.png'
import macchiatoImage from '../assets/cafe-macchiato.png'
import mocaccinoImage from '../assets/mocaccino.png'
import hotChocolateImage from '../assets/chocolate-quente.png'
import cubanCoffeeImage from '../assets/cafe-cubano.png'
import hawaiianCoffeeImage from '../assets/cafe-havaiano.png'
import arabicCoffeeImage from '../assets/cafe-arabe.png'
import irishCoffeeImage from '../assets/cafe-irlandes.png'

export const coffees = {
  traditionalEspresso: {
    id: uuidv4(),
    type: 'traditionalEspresso' as const,
    image: traditionalEspressoImage,
    tags: ['TRADICIONAL'],
    name: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  americanEspresso: {
    id: uuidv4(),
    type: 'americanEspresso' as const,
    image: americanEspressoImage,
    tags: ['TRADICIONAL'],
    name: 'Expresso americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  creamyEspresso: {
    id: uuidv4(),
    type: 'creamyEspresso' as const,
    image: creamyEspressoImage,
    tags: ['TRADICIONAL'],
    name: 'Expresso cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  icedEspresso: {
    id: uuidv4(),
    type: 'icedEspresso' as const,
    image: icedEspressoImage,
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  coffeeWithMilk: {
    id: uuidv4(),
    type: 'coffeeWithMilk' as const,
    image: coffeeWithMilkImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  latte: {
    id: uuidv4(),
    type: 'latte' as const,
    image: latteImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  capuccino: {
    id: uuidv4(),
    type: 'capuccino' as const,
    image: capuccinoImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  macchiato: {
    id: uuidv4(),
    type: 'macchiato' as const,
    image: macchiatoImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  mocaccino: {
    id: uuidv4(),
    type: 'mocaccino' as const,
    image: mocaccinoImage,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  hotChocolate: {
    id: uuidv4(),
    type: 'hotChocolate' as const,
    image: hotChocolateImage,
    tags: ['ESPECIAL'],
    name: 'Chocolate Quente',
    description: 'Bebida com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  cuban: {
    id: uuidv4(),
    type: 'cuban' as const,
    image: cubanCoffeeImage,
    tags: ['ESPECIAL', 'COM LEITE'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  hawaiian: {
    id: uuidv4(),
    type: 'hawaiian' as const,
    image: hawaiianCoffeeImage,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Havaiano',
    description: 'Bebida adocicado preparada com café e leite de coco',
    price: 9.9,
  },
  arabic: {
    id: uuidv4(),
    type: 'arabic' as const,
    image: arabicCoffeeImage,
    tags: ['ESPECIAL'],
    name: 'Arabic',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  irish: {
    id: uuidv4(),
    type: 'irish' as const,
    image: irishCoffeeImage,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
}

export type CoffeeKeyType = keyof typeof coffees

// const coffees: CoffeeType[] = [
//   {
//     id: uuidv4(),
//     image: traditionalEspressoImage,
//     tags: ['TRADICIONAL'],
//     name: 'Expresso tradicional',
//     description: 'O tradicional café feito com água quente e grãos moídos',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: americanEspressoImage,
//     tags: ['TRADICIONAL'],
//     name: 'Expresso americano',
//     description: 'Expresso diluído, menos intenso que o tradicional',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: creamyEspressoImage,
//     tags: ['TRADICIONAL'],
//     name: 'Expresso cremoso',
//     description: 'Café expresso tradicional com espuma cremosa',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: icedEspressoImage,
//     tags: ['TRADICIONAL', 'GELADO'],
//     name: 'Expresso gelado',
//     description: 'Bebida preparada com café expresso e cubos de gelo',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: coffeeWithMilkImage,
//     tags: ['TRADICIONAL', 'COM LEITE'],
//     name: 'Café com leite',
//     description: 'Meio a meio de expresso tradicional com leite vaporizado',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: latteImage,
//     tags: ['TRADICIONAL', 'COM LEITE'],
//     name: 'Latte',
//     description:
//       'Uma dose de café expresso com o dobro de leite e espuma cremosa',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: capuccinoImage,
//     tags: ['TRADICIONAL', 'COM LEITE'],
//     name: 'Capuccino',
//     description:
//       'Bebida com canela feita de doses iguais de café, leite e espuma',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: macchiatoImage,
//     tags: ['TRADICIONAL', 'COM LEITE'],
//     name: 'Macchiato',
//     description:
//       'Café expresso misturado com um pouco de leite quente e espuma',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: mocaccinoImage,
//     tags: ['TRADICIONAL', 'COM LEITE'],
//     name: 'Mocaccino',
//     description: 'Café expresso com calda de chocolate, pouco leite e espuma',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: hotChocolateImage,
//     tags: ['ESPECIAL'],
//     name: 'Chocolate Quente',
//     description: 'Bebida com chocolate dissolvido no leite quente e café',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: cubanCoffeeImage,
//     tags: ['ESPECIAL', 'COM LEITE'],
//     name: 'Cubano',
//     description:
//       'Drink gelado de café expresso com rum, creme de leite e hortelã',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: hawaiianCoffeeImage,
//     tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
//     name: 'Havaiano',
//     description: 'Bebida adocicado preparada com café e leite de coco',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: arabicCoffeeImage,
//     tags: ['ESPECIAL'],
//     name: 'Arabic',
//     description: 'Bebida preparada com grãos de café árabe e especiarias',
//     price: 9.9,
//   },
//   {
//     id: uuidv4(),
//     image: irishCoffeeImage,
//     tags: ['ESPECIAL', 'ALCOÓLICO'],
//     name: 'Irlandês',
//     description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
//     price: 9.9,
//   },
// ]

interface CartCoffee {
  id: string
  type: CoffeeKeyType
  amount: number
}

interface CartContextType {
  cart: CartCoffee[]
  updateCoffeeAmount: (cartCoffee: CartCoffee) => void
  removeCoffee: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children?: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartCoffee[]>([])

  function updateCoffeeAmount(cartCoffee: CartCoffee) {
    setCart((oldCart) => {
      if (oldCart.find((oldCartCoffee) => oldCartCoffee.id === cartCoffee.id))
        return oldCart.map((oldCartCoffee) =>
          oldCartCoffee.id === cartCoffee.id ? cartCoffee : oldCartCoffee,
        )

      return [...oldCart, cartCoffee]
    })
  }

  function removeCoffee(id: string) {
    setCart((oldCart) =>
      oldCart.filter((oldCartCoffee) => oldCartCoffee.id !== id),
    )
  }

  return (
    <CartContext.Provider value={{ cart, updateCoffeeAmount, removeCoffee }}>
      {children}
    </CartContext.Provider>
  )
}
