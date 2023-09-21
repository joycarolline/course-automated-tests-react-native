<p align="center">
  <img width="200" height="200" src="https://avatars.githubusercontent.com/u/141099506?s=200&v=4">
</p>

[![My First Workflow](https://github.com/beadev-net/course-automated-tests-react-native/actions/workflows/main.yml/badge.svg)](https://github.com/beadev-net/course-automated-tests-react-native/actions/workflows/main.yml)

[![Android Detox Test](https://github.com/beadev-net/course-automated-tests-react-native/actions/workflows/android.yml/badge.svg)](https://github.com/beadev-net/course-automated-tests-react-native/actions/workflows/android.yml)

[![IOS Detox Test](https://github.com/beadev-net/course-automated-tests-react-native/actions/workflows/ios.yml/badge.svg)](https://github.com/beadev-net/course-automated-tests-react-native/actions/workflows/ios.yml)

[![pages-build-deployment](https://github.com/beadev-net/course-automated-tests-react-native/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/beadev-net/course-automated-tests-react-native/actions/workflows/pages/pages-build-deployment)

#### Colaboradores:
- [FIGMA](http://figma.com/file/n2bVyegHkwUjiIIaz9rHyj/Untitled?type=design&node-id=4-10&mode=design&t=YmpaAUK7oZ4z16zT-0) by **Joyce Caroline Santos**
- Código + Testes by **Isaias Melo**

# Curso de Testes Automatizados com Jest + React Native Testing Library (RNTL)

### 💡 Iniciando um Projeto do Zero

```sh
mkdir jest-rntl             # Criar pasta no Unix
npm init -y                 # Iniciar package.json
npm install --save-dev jest # Instalar Jest
```

---

### 👨‍🏫 Iniciando nosso Projeto

```sh
git clone git@github.com:beadev-net/course-automated-tests-react-native.git
npm install             # Instalar todas as dependências
sh setup-githooks.sh    # Configurar os githooks
```

---

### Nossas Anotaçōes
- [Jest](docs/jest.md)

### Documentaçōes Oficiais
- [Jest](https://jestjs.io/docs/getting-started)

---
## Comandos Utilitarios

Executa os testes e redireciona a saída para o arquivo `log.txt`
```sh
npm test -- --verbose=true > log.txt    # Sobrescreve o que tiver no log.txt
npm test -- --verbose=true >> log.txt   # Acrescenta com o que tiver no log.txt
```

