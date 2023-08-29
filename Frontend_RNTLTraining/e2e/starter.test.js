describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  afterEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    // Arrange
    const email = await element(by.label('E-mail')).atIndex(0);
    const senha = await element(by.label('Senha')).atIndex(0);
    const loginBtn = await element(by.label('Entrar')).atIndex(0);

    // Act
    await email.typeText('Admin');
    await senha.typeText('admin');

    // Assert
    // await expect(email).toBeVisible();
    // await expect(senha).toBeVisible();

    await loginBtn.tap();
  });
});
