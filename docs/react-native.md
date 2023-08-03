# Iniciando um Projeto do Zero

```sh
npx create-expo-app <nome-do-projeto>
cd <nome-do-projeto>
```

## Instalar o Jest + RNTL
```sh
npm install --save-dev jest                          # Jest
npm install --save-dev @testing-library/react-native # RNTL
npm install --save-dev @testing-library/jest-native  # React Native-specific jest matchers
```

### Configurando o Jest
Crie o arquivo `jest.config.js` e adicione:

```js
{
  "preset": "react-native",
  "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
}
```

### Instalando Biblioteca de Navegação entre Telas (React Navigation)
```sh
npm install @react-navigation/native @react-navigation/native-stack

npx expo install react-native-screens react-native-safe-area-context
```