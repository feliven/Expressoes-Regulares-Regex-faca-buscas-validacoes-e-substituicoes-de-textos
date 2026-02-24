const fs = require("fs");
const bancoCsv = "database.csv";
const banco = fs.readFileSync(bancoCsv, "UTF-8");

const regexTelefone = /\(\d+\)\s\d+-\d+/g;

const matchTelefone = banco.match(regexTelefone);
// console.log(matchTelefone);

const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g;

const matchCelular = banco.match(patternCel);

console.log(matchCelular);
