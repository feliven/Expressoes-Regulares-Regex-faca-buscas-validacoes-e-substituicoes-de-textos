/* Seu desafio é criar uma expressão regular que valide endereços brasileiros de acordo com os seguintes critérios:

O endereço deve começar com o nome da rua, que pode conter letras, números e caracteres especiais, seguido por uma vírgula;
Após a vírgula, deve haver o número da residência, que pode ser uma sequência de números seguida por uma letra opcional, como "123A";
O CEP (Código de Endereçamento Postal) deve estar presente e seguir o formato "CEP 99999-999" (palavra CEP, um espaço vazio, 5 dígitos, hífen e 3 dígitos).
 */

export function enderecoEhValido() {
  const regex = /^[0-9A-Za-zÀ-ÿ]*(?: [0-9A-Za-zÀ-ÿ]+)+, [0-9A-Z]+, CEP \d{5}-\d{3}$/gm;

  const enderecos = [
    "Rua das Flores, 123, CEP 60321-105",
    "Avenida Brasil, 456A, CEP 16945-017",
    "Travessa dos Santos, 101, CEP 12345-678",
    "Rua sem número 17845-698",
    "Rua dos Sonhos, 12B, CEP 12345678",
    "Rua, 123, CEP 60321-105",
  ];

  const testeRegex0 = regex.test(enderecos[0]);
  const testeRegex1 = regex.test(enderecos[1]);
  const testeRegex2 = regex.test(enderecos[2]);
  const testeRegex3 = regex.test(enderecos[3]);
  const testeRegex4 = regex.test(enderecos[4]);
  const testeRegex5 = regex.test(enderecos[5]);

  console.log("enderecos[1]:", enderecos[1], testeRegex1);

  console.log("enderecos[0]:", enderecos[0], testeRegex0);
  console.log("enderecos[1]:", enderecos[1], testeRegex1);
  console.log("enderecos[2]:", enderecos[2], testeRegex2);
  console.log("enderecos[3]:", enderecos[3], testeRegex3);
  console.log("enderecos[4]:", enderecos[4], testeRegex4);
  console.log("enderecos[5]:", enderecos[5], testeRegex5);

  //   enderecos.forEach((endereco) => {
  //     let testeRegex = regex.test(endereco);
  //     console.log(endereco, ":", testeRegex);
  //   });
}
