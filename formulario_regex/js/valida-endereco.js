/* Seu desafio é criar uma expressão regular que valide endereços brasileiros de acordo com os seguintes critérios:

O endereço deve começar com o nome da rua, que pode conter letras, números e caracteres especiais, seguido por uma vírgula;
Após a vírgula, deve haver o número da residência, que pode ser uma sequência de números seguida por uma letra opcional, como "123A";
O CEP (Código de Endereçamento Postal) deve estar presente e seguir o formato "CEP 99999-999" (palavra CEP, um espaço vazio, 5 dígitos, hífen e 3 dígitos).
 */

export function enderecoEhValido() {
  const regexErrado = /^[0-9A-Za-zÀ-ÿ]*(?: [0-9A-Za-zÀ-ÿ]+)+, [0-9A-Z]+, CEP \d{5}-\d{3}$/gm;

  // When you use .test() with the g flag, the regex object maintains a lastIndex property, meaning the second time you call it, it starts searching from where the first match ended.

  const regexCerto = /^[0-9A-Za-zÀ-ÿ]*(?: [0-9A-Za-zÀ-ÿ]+)+, [0-9A-Z]+, CEP \d{5}-\d{3}$/m;

  const regexIA = /^[0-9A-Za-zÀ-ÿ]+(?: [0-9A-Za-zÀ-ÿ]+)+, \d+[A-Za-z]?, CEP \d{5}-\d{3}$/m;

  const regexConjunto =
    /^(?:[0-9]+[o|a|º|ª|°]\s)?[A-Za-zÀ-ÿ]+(?:\s[0-9A-Za-zÀ-ÿ]+)*,\s\d+[A-Za-z]?,\sCEP\s\d{5}-\d{3}$/m;

  const superRegex =
    /^(?:(?:[0-9]+[o|a|º|ª|°])|[A-Za-zÀ-ÿ]+)(?:\s[0-9A-Za-zÀ-ÿ]+)+,\s(?:\d+[A-Za-z]?|s\/n),\sCEP\s\d{5}-\d{3}$/m;

  const superRegex2 =
    /^(?:(?:[0-9]+[o|a|º|ª|°])|[A-Za-zÀ-ÿ]+\W?)(?:\s[0-9A-Za-zÀ-ÿ]+)+,\s(?:\d+[A-Za-z]?|s\/n),\sCEP\s\d{5}-\d{3}$/m;

  const enderecos = [
    "Rua 15 de Setembro, 123, CEP 60321-105",
    "R 15 de Setembro, 123, CEP 60321-105",
    "R. 15 de Setembro, 123, CEP 60321-105",
    "Rua das Flores, 123, CEP 60321-105",
    "Rua das Flores, A123, CEP 60321-105",
    "Avenida Brasil, 456A, CEP 16945-017",
    "1Avenida Brasil, 456A, CEP 16945-017",
    "1ª Travessa, 111, CEP 11111-111",
    "13ª Travessa, 111, CEP 11111-111",
    "Travessa dos Santos, 101, CEP 12345-678",
    "Travessa dos  Santos, 101, CEP 12345-678",
    "Lote Q549B, 0, CEP 34526-098",
    "Lote 549B, s/n, CEP 34526-098",
    "Rua sem número 17845-698",
    "Rua dos Sonhos, 12B, CEP 12345678",
    "Rua, 123, CEP 60321-105",
  ];

  const todosOsRegex = { regexErrado, regexCerto, regexIA, regexConjunto, superRegex, superRegex2 };

  const listaRegex = Object.entries(todosOsRegex);

  listaRegex.forEach(([nome, regex]) => {
    console.log(`\n--- Regex: ${nome} ---`);

    enderecos.forEach((endereco) => {
      let testeRegex = regex.test(endereco);
      console.log(endereco, ":", testeRegex);
    });
  });

  // começa com ordinal (2ª) ou com palavra sem número (rua, avenida)

  const ordinalInicioLogradouro = /(?:[0-9]+[o|a|º|ª|°])/;

  console.log("source", ordinalInicioLogradouro.source);

  const inicioLogradouro = /(?:(?:[0-9]+[o|a|º|ª|°])|[A-Za-zÀ-ÿ]+\W?)/;

  // depois recebe pelo menos uma palavra, com ou sem número, e cada palavra é precedida de espaço

  const restanteLogradouro = /(?:\s[0-9A-Za-zÀ-ÿ]+)+/;

  // número pode ter letra no final, ou pode ser 's/n'

  const numero = /(?:\d+[A-Za-z]?|s\/n)/;

  const cep = /\d{5}-\d{3}/;
}
