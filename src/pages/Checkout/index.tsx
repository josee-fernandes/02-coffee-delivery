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
import {
  AddressContainer,
  AddressInputsContainer,
  CheckoutContainer,
  FinishOrderButton,
  FormWrapper,
  PaymentContainer,
  PaymentMethodButton,
  PaymentMethodsContainer,
  PricingInfoTableContainer,
  SelectedCoffeesContainer,
  SelectedCoffeesList,
} from './styles'
import { SelectedCoffeeItem } from './components/SelectedCoffeeItem'
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
  const { register, handleSubmit, watch, setValue } =
    useForm<FinishOrderSchemaType>({
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

  function checkPaymentOption(event: React.MouseEvent<HTMLButtonElement>) {
    const target = event.target as HTMLButtonElement

    setValue(
      'paymentMethod',
      target.value as keyof typeof paymentMethodEnum.enum,
    )
  }

  const complement = watch('complement')
  const isComplementTyped =
    typeof complement === 'string' && complement.length > 0

  return (
    <CheckoutContainer>
      <Container>
        <FormWrapper>
          <main>
            <h2>Complete seu pedido</h2>
            <form onSubmit={handleSubmit(finishOrder)}>
              <AddressContainer>
                <header>
                  <MapPinLine size={22} />
                  <div>
                    <strong>Endereço de entrega</strong>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </header>

                <AddressInputsContainer>
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
                    <span>
                      <input
                        type="text"
                        placeholder="Complemento"
                        minLength={1}
                        {...register('complement')}
                      />
                      {!isComplementTyped && <p>Opcional</p>}
                    </span>
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
                </AddressInputsContainer>
              </AddressContainer>
              <PaymentContainer>
                <header>
                  <CurrencyDollar size={22} />
                  <div>
                    <strong>Pagamento</strong>
                    <p>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </header>
                <PaymentMethodsContainer>
                  <input
                    type="radio"
                    {...register('paymentMethod')}
                    value={paymentMethodEnum.Enum.creditCard}
                  />
                  <PaymentMethodButton
                    type="button"
                    onClick={checkPaymentOption}
                    value={paymentMethodEnum.Enum.creditCard}
                  >
                    <CreditCard size={16} />
                    <p>CARTÃO DE CRÉDITO</p>
                  </PaymentMethodButton>
                  <input
                    type="radio"
                    {...register('paymentMethod')}
                    value={paymentMethodEnum.Enum.debitCard}
                  />
                  <PaymentMethodButton
                    type="button"
                    onClick={checkPaymentOption}
                    value={paymentMethodEnum.Enum.debitCard}
                  >
                    <Bank size={16} />
                    <p>CARTÃO DE DÉBITO</p>
                  </PaymentMethodButton>
                  <input
                    type="radio"
                    {...register('paymentMethod')}
                    value={paymentMethodEnum.Enum.money}
                  />
                  <PaymentMethodButton
                    type="button"
                    value={paymentMethodEnum.Enum.money}
                    onClick={checkPaymentOption}
                  >
                    <Money size={16} />
                    <p>DINHEIRO</p>
                  </PaymentMethodButton>
                </PaymentMethodsContainer>
              </PaymentContainer>
            </form>
          </main>
          <SelectedCoffeesContainer>
            <h2>Cafés selecionados</h2>
            <div>
              <SelectedCoffeesList>
                <SelectedCoffeeItem />

                <SelectedCoffeeItem />
              </SelectedCoffeesList>
              <PricingInfoTableContainer>
                <table>
                  <tbody>
                    <tr>
                      <td>Total de itens</td>
                      <td>R$ 29,70</td>
                    </tr>
                    <tr>
                      <td>Entrega</td>
                      <td>R$ 3,50</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td>
                        <strong>R$ 33,20</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </PricingInfoTableContainer>
              <FinishOrderButton type="button">
                CONFIRMAR PEDIDO
              </FinishOrderButton>
            </div>
          </SelectedCoffeesContainer>
        </FormWrapper>
      </Container>
    </CheckoutContainer>
  )
}
