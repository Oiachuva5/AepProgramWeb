const numeros = [2, 4, 6, 8];

const dobro = function (x) {
  return x * 2;
};

console.log(numeros.map(dobro));

const nomes = ["Ana", "Bia", "Lia", "Rafa"];

const letras = nomes.map((text) => text[0]);

console.log(letras);

const carrinho = [
  { nome: "Caneta", quantidade: 10, preco: 7.99 },
  { nome: "Impressora", quantidade: 0, preco: 649.5 },
  { nome: "Caderno", quantidade: 4, preco: 27.1 },
  { nome: "Lápis", quantidade: 3, preco: 5.82 },
  { nome: "Tesoura", quantidade: 1, preco: 19.99 },
];

const nomesDoProduto = carrinho.map(function (nomeProduto) {
  return console.log(nomeProduto.nome);
});

// console.log(nomesDoProduto);

const quantidadePorPreco = carrinho.map(function (x) {
  let objetoProduto = {
    nome: x.nome,
    valor: x.quantidade * x.preco,
  };

  return objetoProduto;
});

console.log(quantidadePorPreco);
