# Exercitando Módulo 1:

## 📚 Teórico

#### Exercício 1 - O que é o Jest e Como podemos chama-lo?
R: O jest é um test runner assim como um framework tambem

#### Exercício 2 - O que é regressão? Cite um exemplo que você já tenha vivenciado
R: Refere-se à ocorrência de falhas em um software após a introdução de novas alterações ou correções no código. 
Ex:
"Inclusão de botão novo na página, o botão voltar e garantir que este botão não vai quebrar a tela e garantir que ele vai funcionar."

#### Exercício 3 - O que é Integração Contínua e como os Testes Automatizados ajudam?
R: Integração Contínua é uma prática que se concentra em combinar o código-fonte criado por diferentes desenvolvedores em um único lugar central, várias vezes ao dia. 

Testes automatizados garantem que a alteração é testada automaticamente para garantir que não cause problemas no projeto como um todo (minimizar erros).

#### Exercício 4 - Quais são as etapas dentro da metódologia TDD (Test-Driven Development)? Explique cada uma delas.
R:
- Red - Escrever o teste pensando na implementação
- Green - Escrever a implementação para fazer o teste passar
- Refactor - Melhorar a implementação ou o teste para ficar mais manutenivel ou mais performatico.

#### Exercício 5 - Dentro de um cenário de teste encontrei o termo `sut` dentro do `// Act`, o que significa?
R: System Under Test - O sistema que a gente testando naquele teste especifico.

#### Exercício 6 - Para que serve o SetUp e Teardown em um framework de teste? Cite as funçōes que alcaçam esse resultado no `Jest`.
R: O SetUp serve para inicializar dependencias, variaveis, constantes, objetos e mocks que são utilizados nos testes.
O Teardown serve para resetar as dependencias, variaveis, constantes, objetos e mocks.

- `BeforeEach` - Roda **antes de cada teste** dentro de um escopo do `describe` ou no escopo do `arquivo de teste`
- `BeforeAll` - Roda **antes de todos os teste** dentro de um escopo do `describe` ou no escopo do `arquivo de teste`
- `AfterEach` - Roda **depois de cada teste** dentro de um escopo do `describe` ou no escopo do `arquivo de teste`
- `AfterAll` - Roda **depois de todos os testes** dentro de um escopo do `describe` ou no escopo do `arquivo de teste`

#### Exercício 7 - Qual a diferença entre `Mock`, `Spy`, `Stub`, `Dummy` e `Fake`?
R: 
- `Mock`: O mock serve para criar um objeto simulado ao invés de utilizar a implementação real. (casos de uso: substituir a a implementação de uma SDK de terceiros).
- `Spy`: O Espião que serve para escutar metódos dentro de uma classe ou arquivo, e serve para verificar detalhes de implementação.
- `Stub`: O stub é um tipo de dublê de teste que retorna um valor definido. (casos de uso: a resposta em JSON de uma API de terceiro).
- `Dummy`: Objeto simulado que é passado como parâmetro, mas nunca usado pelo componente em teste.
- `Fake`: Objeto simulado substitui uma dependência externa por uma implementação simplificada.

#### Exercício 8 - Quais são os tipos de Testes Automatizados? Explique cada um deles.
- `e2e`: ele serve para testar um fluxo ponta-a-ponta, o que quer dizer que normalmente ele simular a ação de um usuário no frontend e essa ação reflete por toda a aplicação.
- `integração`: serve para validar se as integraçōes com outros softwares estão funcionando corretamente.
- `unitário`: serve para validar o comportamento ou output de uma unidade dentro do software em desenvolvimento.

---

## ✋ Prático

#### Exercício 1 - Testando uma função simples:

1. Crie uma função chamada sum que recebe dois parâmetros numéricos e retorna a soma deles. 
2. Escreva testes para verificar se a função sum está funcionando corretamente.

#### Exercício 2 - Testando uma função assíncrona:

**Teste 1:** (utilize o fetch do JS)
1. Crie uma função chamada fetchData que faz uma chamada assíncrona a uma API e retorna os dados obtidos. 
2. Escreva testes para verificar se a função fetchData retorna os dados corretos quando a API é simulada usando um mock.

**Teste 2:** (utilize o axios)
1. Suponha que você tenha um serviço de API que faz chamadas HTTP para um servidor externo. 
2. Crie testes para esse serviço usando o Jest e um mock da biblioteca axios para simular as chamadas à API e verificar se o serviço se comporta corretamente em diferentes cenários.


#### Exercício 3 - Testando uma classe:

1. Crie uma classe chamada Calculator que tenha métodos para somar, subtrair, multiplicar e dividir dois números. 
2. Escreva testes para verificar se todos os métodos da classe Calculator estão funcionando corretamente.

#### Exercício 4 - Testando uma função com dependências:

1. Crie uma função chamada getFullName que recebe dois parâmetros: firstName e lastName. 
2. A função deve chamar uma função externa formatName para formatar o nome completo. 
3. Escreva testes usando o Jest e um mock para a função formatName para verificar se a função getFullName está chamando corretamente a função externa e retornando o nome completo formatado.

---

# Desafio 🏆

#### Exercício 5 - Testando um componente React:

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

1. Crie um componente React simples que recebe um número como prop e exibe o dobro desse número na tela. 
2. Escreva testes usando o Jest e o react-testing-library para verificar se o componente funciona corretamente quando recebe diferentes valores como prop.

#### Exercício 6 - Testando um formulário:

Crie um formulário React simples que tenha campos para nome, e-mail e mensagem. Escreva testes usando o Jest e o react-testing-library para verificar se o formulário está funcionando corretamente quando o usuário preenche os campos e submete o formulário.
