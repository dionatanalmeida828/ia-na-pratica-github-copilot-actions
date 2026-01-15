// Testes gerados com o prompt:
// "Crie testes unitários usando Jest para a função calcularTotalPedidos,
// cobrindo casos de sucesso e erros de validação."

const { calcularTotalPedidos } = require("../src/pedido");

describe("calcularTotalPedidos", () => {
  test("deve calcular o total com desconto corretamente", () => {
    const pedidos = [100, 200, 300];
    const desconto = 10;

    const resultado = calcularTotalPedidos(pedidos, desconto);

    expect(resultado).toBe(540);
  });

  test("deve lançar erro quando pedidos não for um array", () => {
    expect(() => calcularTotalPedidos("invalid", 10)).toThrow();
  });

  test("deve lançar erro quando desconto for inválido", () => {
    expect(() => calcularTotalPedidos([100, 200], -5)).toThrow();
    expect(() => calcularTotalPedidos([100, 200], 150)).toThrow();
  });

  test("deve lançar erro quando algum pedido for inválido", () => {
    expect(() => calcularTotalPedidos([100, -50], 10)).toThrow();
  });
});
