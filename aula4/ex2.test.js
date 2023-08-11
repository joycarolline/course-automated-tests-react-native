const Task = require("./entities/task");

// test("test", async () => {
//   console.log(global, globalThis);

//   // global.fetch = jest.fn().mockResolvedValue({
//   //   json: jest.fn().mockResolvedValue({
//   //     results: [
//   //       {
//   //         name: "Curso de Teste Automatizado",
//   //       },
//   //     ],
//   //   }),
//   // });
// });

describe("describe 1", () => {
  test("teste 1a", () => {
    console.log(Task);

    const task = new Task({
      taskName: "task 1",
      dateLimit: "2023-09-30",
    });

    console.log("teste 1a: ", task.getStatus());

    expect(task.getStatus()).toHaveBeenCalledTimes(1);
  });
});
