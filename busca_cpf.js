const fs = require("fs");
const bancoCsv = "database.csv";
const banco = fs.readFileSync(bancoCsv, "UTF-8");

const regexCpf = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g;

const matchCpf = banco.match(regexCpf);
console.log(matchCpf);
