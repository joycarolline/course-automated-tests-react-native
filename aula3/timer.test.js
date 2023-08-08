test("advance the timers automatically", () => {
  jest.useFakeTimers({ now: 1678851326000 });

  const now = new Date();

  const sut = now.toUTCString();

  expect(sut).toEqual("Wed, 15 Mar 2023 03:35:26 GMT");
});
