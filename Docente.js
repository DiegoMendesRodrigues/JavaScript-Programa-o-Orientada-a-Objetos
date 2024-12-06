import User from "./User.js"

export default class Docente extends User {
  constructor(nome, sobrenome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, sobrenome, email, nascimento, role, ativo)
  }

  /**
   * Polimorfismo
   * Override = sobrescrita de método
   */
  exibirInfos() {
    return `## Docente\n${super.exibirInfos()}`
  }

  aprovarEstudante(nomeEstudante, curso) {
    return `O estudante ${nomeEstudante} foi aprovado no curso ${curso} pelo docente ${this.nome}!`
  }
}

// const novoDocente = new Docente('Natalia Neau', 'natalia@fake.io', '1985-09-06')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovarEstudante('Julia', 'Fundamentos de JS'))