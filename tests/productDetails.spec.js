const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  //it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  //  fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
  // Teste se productDetails é uma função.
  it('testa se é uma function', () => {
    expect(typeof productDetails).toBe('function');
  })
  // Teste se o retorno da função é um array.
  it('testa se o retorno da função é um array', () => {
    expect(typeof productDetails('a','a')).toBe('object');
  })
  // Teste se o array retornado pela função contém dois itens dentro.
  it('se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails('a','b').length).toEqual(2);
  })
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetails('a','b')[0]).toBe('object')
    expect(typeof productDetails('a','b')[1]).toBe('object')
  });
  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    const lista = productDetails('a','b')
    expect(lista[0] !== lista[1]).toBeTruthy();
  })
  // Teste se os dois productIds terminam com 123.
  it('os dois productIds terminam com 123', () => {
    const lista = productDetails('a','b')
    expect(lista[0].details.productId).toContain('a123');
  })
  //});
});
