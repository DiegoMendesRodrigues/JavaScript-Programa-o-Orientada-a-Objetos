/**
 * Função construtora
 * Fazia o papel das classes no JavaScript, antes de existir essa estrutura
 * na linguagem
 */
function User(nome, email) {
  // Atribuindo contexto das propriedades para os parâmetros
  this.nome = nome
  this.email = email

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`
  }
}

// Criar uma instância de um objeto, a partir de uma função construtora
const novoUser = new User('Diego', 'diego@fake.io')
console.log(novoUser.exibirInfos())
console.log('-')


/**
 * Object.create
 */
function Admin(role) {
  User.call(this, 'Juliana', 'juliana@fake.io')
  this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const juliana = new Admin('admin')
console.log(juliana.exibirInfos())
console.log(juliana.role)
console.log('-')

const pessoa = {
  exibirInfos: function(user) {
    return `${user.nome}, ${user.email}`
  }
}

const ana = Object.create(pessoa)
console.log(ana.exibirInfos({nome: 'Ana', email: 'ana@fake.io'}))