## Configurando o Jest

Abra o arquivo package.json e adicione:
```json
"scripts": {
    "test": "jest"
  },
```

Agora execute para verificar se esta funcionando:
```sh
npm test
```

Vamos criar o arquivo de config do Jest, chamado de `jest.config.js|ts|mjs|cjs|json`:
```js
/** @type {import('jest').Config} */
const config = {
    displayName: 'course-tests-automated',      // Nome do projeto
    bail: 1,                                    // Para no primeiro erro
    verbose: true,                              // Mostra detalhes dos testes
    "//": "Coverage",
    collectCoverage: true,                      // Gera o coverage
    collectCoverageFrom: [                      // Arquivos que serão cobertos
        'src/**/*.js',
        '!src/**/*.spec.js',
        '!src/**/*.mock.js',
        '!src/index.js',
    ],                                          
    coverageDirectory: '__tests__/coverage',    // Pasta onde será gerado o coverage
    coverageReporters: ['lcov', 'json'],        // Formato do coverage
    "//": "Tests Execution",
    rootDir: './',                              // Diretório raiz onde contém o jest config file
    roots: ['<rootDir>/src'],                   // Diretórios onde estão os arquivos de teste
    testMatch: ['**/__tests__/**/*.spec.js'],   // Arquivos de teste
    testEnvironment: 'node',                    // Ambiente de teste
    transform: {                                // Transforma os arquivos utilizando algum plugin
        '.(js|jsx|ts|tsx)': 'ts-jest',
    }, 
    preset: 'ts-jest',                          // Conjunto predefinido de configurações e opções 
    moduleNameMapper: {                         // Mapeia os arquivos e disponibiliza um STUB para acessa-los
        '^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/RelativeImageStub.js',, // mapeia tudo que tem .png de extensao e cria um STUB RelativeImageStub
    }, 
    moduleFileExtensions: [                     // Extensões dos arquivos
        'js', 
        'jsx', 
        'json', 
        'node'
    ], 
    testPathIgnorePatterns: ['/node_modules/'], // Ignora os arquivos
    watchPathIgnorePatterns: [                  // Ignora os arquivos no watch
        '/node_modules/'
    ],
    "//": "SetUp and TearDown",
    globals: {                                  // Variáveis globais
        __DEV__: true,
    }, 
    automock: false,                            // Mock automático para todos os arquivos importados no teste
    resetMocks: false,                          // Reseta os mocks automaticamente apos cada teste
    resetModules: false,                        // Reseta os módulos automaticamente apos cada teste
    restoreMocks: false,                        // Restaura os mocks automaticamente apos cada teste
    timers: 'fake',                             // Usa timers fake
    globalTeardown: './__tests__/teardown.js',  // Arquivo de teardown acionado apenas 1x depois de todos os testes
    globalSetup: './__tests__/setup.js',        // Arquivo de setup acionado apenas 1x antes de todos os testes
    setupFilesAfterEnv: [                       // Arquivo de setup acionado antes de cada arquivo de testes e depois do setup global
        '<rootDir>/__tests__/setup.js'
    ],
    "//": "Performance and Execution",
    testTimeout: 5000,                          // Timeout dos testes
    workerThreads: true,                        // Usa threads para rodar os testes
    maxWorkers: 5,                              // Quantidade de threads,
    maxConcurrency: 5,                          // Quantidade de testes que podem rodar ao mesmo tempo
    "//": "Notification",
    notify: true,                               // Notifica quando acaba de rodar os testes, instale `npm install --save-dev node-notifier`,
    notifyMode: 'failure',                      // Modo de notificação
};

module.exports = config;
```