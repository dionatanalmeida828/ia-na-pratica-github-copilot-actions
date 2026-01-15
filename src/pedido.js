// Gerado com o prompt:
// "Crie uma função em JavaScript que calcule o valor total de uma lista de pedidos,
// aplicando um desconto percentual. A função deve validar entradas inválidas e
// lançar erro quando necessário."

function calcularTotalPedidos(pedidos, desconto) {
  if (!Array.isArray(pedidos)) {
    throw new Error("Pedidos deve ser um array");
  }

  if (typeof desconto !== "number" || desconto < 0 || desconto > 100) {
    throw new Error("Desconto inválido");
  }

  const total = pedidos.reduce((acc, pedido) => {
    if (typeof pedido !== "number" || pedido < 0) {
      throw new Error("Valor de pedido inválido");
    }
    return acc + pedido;
  }, 0);

  return total - (total * desconto) / 100;
}

module.exports = { calcularTotalPedidos };
