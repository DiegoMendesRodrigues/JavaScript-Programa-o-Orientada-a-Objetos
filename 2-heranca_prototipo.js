/* Protótipo que será utilizado */
const user = {
  nome: 'Diego',
  email: 'diego@fake.io',
  nascimento: '1982-07-08',
  role: 'estudante',
  ativo: false,
  exibirInfos: function () {
    console.log(`Nome: ${this.nome}`)
    console.log(`E-mail: ${this.email}`)
    console.log(`Data de nascimento: ${this.nascimento}`)
    console.log(`Tipo: ${this.role}`)
    console.log(`Está ativo: ${this.ativo ? 'Sim' : 'Não'}`)
  }
}

/* Objeto que irá utilizar o protótipo */
const admin = {
  nome: 'Natasha',
  email: 'natasha@fake.io',
  nascimento: '1985-02-11',
  role: 'admin',
  ativo: true,
  criarCurso: function () {
    console.log('Curso criado')
  }
}

/**
 * Realizar a herança de protótipo, onde o objeto admin usa o objeto user 
 * como modelo
 */
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
console.log('-')

/**
 * Outro objeto que irá utilizar o protótipo
 * Iremos herdar propriedades e métodos
 */
const coordenador = {
  nome: 'Adriana',
  email: 'adriana@fake.io',
  role: 'coordenador',
}
Object.setPrototypeOf(coordenador, user)
coordenador.exibirInfos()
