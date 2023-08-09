const { differenceInYears } = require("date-fns");

class User {
  constructor({ email, senha, dataNascimento }) {
    this.email = this.#setEmail(email);
    this.senha = this.#setSenha(senha);
    this.dataNascimento = this.#setDataNascimento(dataNascimento);
  }

  #setEmail(email) {
    if (email.length < 10) {
      throw new Error("Email inválido, contém menos de 10 caracteres");
    }

    if (email.length > 50) {
      throw new Error("Email inválido, contém mais que 50 caracteres");
    }

    return email;
  }

  #setSenha(senha) {
    if (senha.length < 8) {
      throw new Error("Senha inválida, contém menos que 8 caracteres");
    }

    if (senha.length > 50) {
      throw new Error("Senha inválida, contém mais que 50 caracteres");
    }

    if (!senha.match(/[0-9]/g)) {
      throw new Error("Senha inválida, não contempla números");
    }

    if (!senha.match(/[A-Z]/g)) {
      throw new Error("Senha inválida, não contempla letras maiúsculas");
    }

    return senha;
  }

  #setDataNascimento(dataNascimento) {
    const dataHoje = new Date();
    const dataNascimentoFormatada = new Date(dataNascimento);

    const idade = differenceInYears(dataHoje, dataNascimentoFormatada);

    if (idade < 8) {
      throw new Error("Data de nascimento inválida, menor que 8 anos");
    }

    if (idade > 122) {
      throw new Error("Data de nascimento inválida, maior que 122 anos");
    }

    return dataNascimento;
  }
}

module.exports = User;
