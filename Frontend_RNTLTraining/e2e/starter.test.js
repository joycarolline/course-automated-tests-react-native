const loginFlow = async () => {
  const enterBtn = await element(by.label('Entrar')).atIndex(0);

  await enterBtn.tap();

  const email = await element(by.label('E-mail')).atIndex(0);
  const senha = await element(by.label('Senha')).atIndex(0);
  const loginBtn = await element(by.label('Entrar')).atIndex(0);

  await email.typeText('Admin');
  await senha.typeText('admin');

  await loginBtn.tap();
};

describe('App RNTL', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  afterEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    loginFlow();
  });

  it('should have home screen', async () => {
    // Arrange, Act
    await loginFlow();

    // Assert
    await expect(element(by.text('Meu Perfil'))).toBeVisible();
  });

  it('should have home screen and like a fake news', async () => {
    // Arrange
    await loginFlow();

    // Act
    await element(by.label('OK')).atIndex(0).tap();
    await element(by.label('Botão Adicionar Like')).atIndex(0).tap();

    // Assert
    await expect(element(by.text('1 Curtidas'))).toBeVisible();
  });
});
