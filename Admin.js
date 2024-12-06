import User from "./User.js"

export default class Admin extends User {
  constructor(nome, sobrenome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, sobrenome, email, nascimento, role, ativo)
  }

  /**
   * Polimorfismo
   * Override = sobrescrita de método
   */
  exibirInfos() {
    return `## Administrador\n${super.exibirInfos()}`
  }

  criarCurso(nomeCurso, qtdVagas) {
    return `O curso ${nomeCurso} foi criado com ${qtdVagas} vagas!`
  }
}

// const novoAdmin = new Admin('Bruna', 'bruna@fake.io', '1988-06-08')

// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso('Conhecendo JS', 20))
