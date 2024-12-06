export default class User {
  #nome;
  #sobrenome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  // Getters
  get nome() {
    return this.#nome;
  }

  get sobreNome() {
    return this.#sobrenome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  // Setters
  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("O formato do nome não é válido");
    }
    let [nome, ...sobreNome] = novoNome.split(" ");
    sobreNome = sobreNome.join(" ");

    this.#nome = nome;
    this.#sobrenome = sobreNome;
  }

  set email(novoEmail) {
    this.#email = novoEmail;
  }

  set nascimento(novoNascimento) {
    this.#nascimento = novoNascimento;
  }

  set role(novaRole) {
    this.#role = novaRole;
  }

  set ativo(novoAtivo) {
    this.#ativo = novoAtivo;
  }

  #exibirSimNao(valor) {
    return valor ? "Sim" : "Não";
  }

  exibirInfos() {
    let textoSaida = `Nome: ${this.nome}\nSobrenome: ${this.sobreNome}\n`;
    textoSaida += `E-mail: ${this.email}\n`;
    textoSaida += `Nascimento: ${this.nascimento}\nRole: ${this.role}\n`;
    textoSaida += `Ativo: ${this.#exibirSimNao(this.ativo)}`;
    return textoSaida;
  }

  exibirInformacoes() {
    const tipos = {
      basico: `Dados básicos: ${this.nome}, ${this.email}`,
      completo: `Dados completos: ${this.nome}, ${this.sobreNome}, ${this.email}, ${this.nascimento}`,
    };
    return tipos[arguments[0]];
  }

  // Método estático
  static exibirInfosGenericas(nome, email) {
    return `${nome}, ${email}`;
  }
}

// const novoUser = new User('Julia', 'julia@fake.io', '1990-07-02')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())
// console.log('-')

// novoUser tem como protótipo User?
// console.log(User.prototype.isPrototypeOf(novoUser))
