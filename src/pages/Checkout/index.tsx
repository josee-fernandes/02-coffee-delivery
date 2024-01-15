import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Container } from '../../styles/Container'
import { CheckoutContainer } from './styles'

const paymentMethodEnum = z.enum(['creditCard', 'debitCard', 'money'])

const finishOrderSchema = z.object({
  cep: z
    .string()
    .length(8, { message: 'O CEP é obrigatório (8 caracteres)' })
    .regex(/^\d{5}(-\d{3})?$/, { message: 'CEP inválido' }),
  street: z.string().min(1, { message: 'A rua é obrigatória' }),
  number: z.number().min(1, { message: 'O número é obrigatório' }),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, { message: 'O bairro é obrigatório' }),
  city: z.string().min(1, { message: 'A cidade é obrigatória' }),
  state: z
    .string()
    .length(2, { message: 'A sigla do estado é obrigatória (2 caracteres)' }),
  paymentMethod: paymentMethodEnum,
})

type FinishOrderSchemaType = z.infer<typeof finishOrderSchema>

export function Checkout() {
  const { register, handleSubmit } = useForm<FinishOrderSchemaType>({
    defaultValues: {
      cep: '',
      street: '',
      number: 0,
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'creditCard',
    },
  })

  function finishOrder(data: FinishOrderSchemaType) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <Container>
        <div>
          <main>
            <h2>Complete seu pedido</h2>
            <form onSubmit={handleSubmit(finishOrder)}>
              <div>
                <header>
                  <MapPinLine size={22} />
                  <div>
                    <p>Endereço de entrega</p>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </header>

                <input
                  type="text"
                  placeholder="CEP"
                  minLength={1}
                  maxLength={9}
                  required
                  {...register('cep')}
                />
                <input
                  type="text"
                  placeholder="Rua"
                  minLength={1}
                  required
                  {...register('street')}
                />
                <div>
                  <input
                    type="text"
                    placeholder="Número"
                    minLength={1}
                    required
                    {...register('number')}
                  />
                  <input
                    type="text"
                    placeholder="Complemento"
                    minLength={1}
                    {...register('complement')}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Bairro"
                    minLength={1}
                    required
                    {...register('neighborhood')}
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    minLength={1}
                    required
                    {...register('city')}
                  />
                  <input
                    type="text"
                    placeholder="UF"
                    minLength={1}
                    required
                    {...register('state')}
                  />
                </div>
              </div>
              <div>
                <header>
                  <CurrencyDollar size={22} />
                  <div>
                    <p>Pagamento</p>
                    <p>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </header>
                <div>
                  <button type="button">
                    <input
                      type="radio"
                      {...register('paymentMethod')}
                      value={paymentMethodEnum.Enum.creditCard}
                    />
                    <CreditCard size={16} />
                    <p>CARTÃO DE CRÉDITO</p>
                  </button>
                  <button type="button">
                    <input
                      type="radio"
                      {...register('paymentMethod')}
                      value={paymentMethodEnum.Enum.debitCard}
                    />
                    <Bank size={16} />
                    <p>CARTÃO DE DÉBITO</p>
                  </button>
                  <button type="button">
                    <input
                      type="radio"
                      {...register('paymentMethod')}
                      value={paymentMethodEnum.Enum.money}
                    />
                    <Money size={16} />
                    <p>DINHEIRO</p>
                  </button>
                </div>
              </div>
              <button type="submit">submit</button>
            </form>
          </main>
          <div>
            <h2>Cafés selecionados</h2>
          </div>
        </div>
      </Container>
    </CheckoutContainer>
  )
}
