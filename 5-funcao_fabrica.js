/**
 * Uma factory function (“função fábrica”) é como chamamos, em JavaScript, 
 * uma função que retorna um objeto.
 */
function criarUsuario(nome, email) {
  return {
    nome,
    email,
    exibeInfos() {
      return `${nome}, ${email}`
    }
  }
}

const novoUsuario = criarUsuario('Diego', 'diego@fake.io')
console.log(novoUsuario)
console.log(novoUsuario.exibeInfos())
console.log('-')

/**
 * Função new
 */
function User(nome, email) {
  this.nome = nome
  this.email = email

  this.exibirInfos = function () {
    return `${nome}, ${email}`
  }
}

const usuario = new User('Regina', 'regina@fake.io')
console.log(usuario)
console.log(usuario.exibirInfos())
