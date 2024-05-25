export function toCurrency(value: number = 0) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
