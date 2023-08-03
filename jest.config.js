/** @type {import('jest').Config} */

const config = {
  testTimeout: 2500,
  rootDir: "./", // Diretório raiz onde contém o jest config file
  roots: [
    // Diretórios onde estão os arquivos de teste
    "<rootDir>",
  ],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/MyApp"], // Ignora os arquivos
};

module.exports = config;
