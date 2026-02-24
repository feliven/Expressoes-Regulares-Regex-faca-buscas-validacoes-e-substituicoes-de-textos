const fs = require("fs");
const bancoCsv = "database.csv";
const banco = fs.readFileSync(bancoCsv, "UTF-8");

const regexDtNasc = /\d{2}[/. ]?\d{2}[/. ]?\d{4}$/gm;

const matchDtNasc = banco.match(regexDtNasc);
console.log("matchDtNasc:", matchDtNasc);

const outroRegexDtNasc = /\b(\d{2}[/. ]?\d{2}[/. ]?\d{4})\b/g;

// minha ideia inicial:
// \d{2}[/. ]{1}?\d{2}[/. ]{1}\d{4}

// sugestão da IA:
// /\b(?:(\d{2})[\/.\s]?(\d{2})[\/.\s]?(\d{4}))\b/g

const outroMatchDtNasc = banco.match(outroRegexDtNasc);
console.log("outroMatchDtNasc:", outroMatchDtNasc);
