# Exercitando Módulo 1:

## 📚 Teórico

#### Exercício 1 - O que é o Jest e Como podemos chama-lo?
R: 

#### Exercício 2 - O que é regressão? Cite um exemplo que você já tenha vivenciado
R: 

#### Exercício 3 - O que é Integração Contínua e como os Testes Automatizados ajudam?
R: 

#### Exercício 4 - Quais são as etapas dentro da metódologia TDD (Test-Driven Development)? Explique cada uma delas.
R: 

#### Exercício 5 - Dentro de um cenário de teste encontrei o termo `sut` dentro do `// Act`, o que significa?
R: 

#### Exercício 6 - Para que server o SetUp e Teardown em um framework de teste? Cite as funçōes que alcaçam esse resultado no `Jest`.
R: 

#### Exercício 7 - Qual a diferença entre `Mock`, `Spy`, `Stub`, `Dummy` e `Fake`?

#### Exercício 8 - Quais são os tipos de Testes Automatizados? Explique cada um deles.

#### Exercício 9 - Quais são os tipos de Testes Automatizados? Explique cada um deles.
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