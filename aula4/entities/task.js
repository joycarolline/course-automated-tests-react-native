const dateFns = require("date-fns");

class Task {
  constructor({ taskName, dateLimit, justify, doneAt }) {
    this.taskName = this.#setTaskName(taskName);
    this.dateLimit = this.#setDateLimit(dateLimit);
    this.justify = this.#setJustify(justify, dateLimit);
    this.doneAt = this.#setDoneAt(doneAt);
  }

  #setJustify(justify, dateLimit) {
    const objDateLimit = new Date(dateLimit);
    const today = new Date();

    const isBefore = dateFns.isBefore(objDateLimit, today);

    if (!isBefore && !this.doneAt) {
      return justify;
    }

    if (isBefore && !justify) {
      throw new Error("Tarefas atrasadas devem ter justificativa");
    }

    if (justify.length < 5) {
      throw new Error("A justificativa deve conter no mínimo 5 letras");
    }

    if (justify.length > 200) {
      throw new Error("A justificativa deve conter no máximo 200 letras");
    }

    return justify;
  }

  #setTaskName(taskName) {
    if (taskName.length < 3) {
      throw new Error("O nome da tarefa deve conter no mínimo 3 letras");
    }

    if (taskName.length > 120) {
      throw new Error("O nome da tarefa deve conter no máximo 120 letras");
    }

    return taskName;
  }

  #setDateLimit(dateLimit) {
    return new Date(dateLimit);
  }

  #setDoneAt(doneAt) {
    if (!doneAt) {
      return null;
    }

    return new Date(doneAt);
  }

  getStatus() {
    const today = new Date();
    const isAfter = dateFns.isAfter(this.dateLimit, today);

    if (!this.doneAt && isAfter) {
      return "Aberta";
    }

    const countDays = dateFns.differenceInDays(today, this.dateLimit);

    if (!this.doneAt && countDays == 0) {
      return "Vence Hoje";
    }

    if (!this.doneAt && !isAfter) {
      return `Atrasada (${countDays} dias)`;
    }

    const doneAtIsAfterThanDateLimite = dateFns.isAfter(
      this.doneAt,
      this.dateLimit,
    );

    if (this.doneAt && !doneAtIsAfterThanDateLimite) {
      return "Concluida";
    }

    const countDoneAtDays = dateFns.differenceInDays(
      this.doneAt,
      this.dateLimit,
    );

    if (this.doneAt && doneAtIsAfterThanDateLimite) {
      return `Concluida com Atraso (${countDoneAtDays} dias)`;
    }
  }
}

module.exports = Task;
