const fs = require("fs");
const path = require("path");

const prettierConfig = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "always",
  semi: false,
  endOfLine: "auto",
};

// Obtem o diretório do script (createPrettierConfig.js)
const scriptDir = __dirname;

// Navega para o diretório pai (node_modules/@brunomatosdev) para chegar à raiz do projeto
const projectRootDir = path.join(scriptDir, "..", "..", "..");

// Cria o caminho para o arquivo .prettierrc na raiz do projeto
const prettierConfigPath = path.join(projectRootDir, ".prettierrc");

// Escreve o conteúdo do arquivo .prettierrc
fs.writeFileSync(prettierConfigPath, JSON.stringify(prettierConfig, null, 2));

console.log(".prettierrc created successfully.");
