export function formatCurrency(value: number, withSymbol = true) {
  if (withSymbol)
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .formatToParts(value)
    .map((part) =>
      part.type !== 'literal' && part.type !== 'currency' ? part.value : '',
    )
    .join('')
}
