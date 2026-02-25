const fs = require("fs");
const bancoCsv = "database.csv";
const banco = fs.readFileSync(bancoCsv, "UTF-8");

const regexNome = /[\w+]/g;
// pega caracteres um a um
const matchNome = banco.match(regexNome);
console.log("matchNome:", matchNome);

const regexNome2 = /[A-Za-zÀ-ÿ]+\s[A-Za-zÀ-ÿ]+/g;
// pega grupos de 2 palavras
const matchNome2 = banco.match(regexNome2);
console.log("matchNome2:", matchNome2);

const regexNome3 = /([A-Za-zÀ-ÿ]+)(\s[A-Za-zÀ-ÿ]+)+/g;
// pega termos completos, incluindo o título 'Data de nascimento'
const matchNome3 = banco.match(regexNome3);
console.log("matchNome3:", matchNome3);

const regexNome4 = /^([A-Za-zÀ-ÿ]+)(\s[A-Za-zÀ-ÿ]+)+/gm;
// retorna só os nomes completos, mas com grupos de sobrenome que começam com espaço vazio
const matchNome4 = banco.match(regexNome4);
console.log("matchNome4:", matchNome4);

const regexNome5 = /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/gm;
// retorna os nomes completos, e grupos do último sobrenome começam sem espaço vazio
const matchNome5 = banco.match(regexNome5);
console.log("matchNome5:", matchNome5);

const regexNome6 = /^([A-Za-zÀ-ÿ]+)(((\s[A-Za-zÀ-ÿ]+)+))/gm;

// ^([A-Za-zÀ-ÿ]+)((\s[A-Za-zÀ-ÿ]+)+)

// retorna os nomes completos e agrupa todos os sobrenomes (sem começarem com espaço vazio)
const matchNome6 = banco.match(regexNome6);
console.log("matchNome6:", matchNome6);

const regexNome7 = /^([A-Za-zÀ-ÿ]+)(((\s[A-Za-zÀ-ÿ]+)+))/gm;

// ^([A-Za-zÀ-ÿ]+)((\s[A-Za-zÀ-ÿ]+)+)

// retorna os nomes completos e agrupa todos os sobrenomes (sem começarem com espaço vazio)
// e mostra grupos
const matchNome7 = banco.matchAll(regexNome7);

console.log("matchNome7:");

for (const match of matchNome7) {
  console.log("nome completo:", match[0]); // Full match
  console.log("primeiro nome:", match[1]); // First captured group
  console.log("sobrenome:", match[2]); // Second captured group
}
