export default function ehUmNome(campo) {
  const nome = campo.value;

  const regex1 = /^[A-Za-zÀ-ÿ -]{3,30}$/;
  const patternNome = regex1.test(nome);

  const regex2 = /^(?!(.)\1\1)[A-Za-zÀ-ÿ -]{3,30}$/i;
  const patternNome2 = regex2.test(nome);

  // console.log("patternNome:",patternNome);
  console.log("patternNome2:", patternNome2);

  if (!patternNome2) {
    campo.setCustomValidity("Não é um nome válido");
    console.log(`"${nome}" não é um nome válido`);
  }

  return nome;
}
