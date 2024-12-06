import User from "./User.js"
import Docente from "./Docente.js"
import Admin from "./Admin.js"

const novoUsuario = new User('Bruna', 'Mendes', 'bruna@fake.io', '1988-03-15')
const novoDocente = new Docente('Regina', 'Marcia', 'regina@fake.io', '1970-04-22', 'docente', false)

console.log(novoUsuario)
console.log(novoUsuario.exibirInfos())
console.log('-')
console.log('BASICO')
console.log(novoUsuario.exibirInformacoes('basico'))
console.log('-')
console.log('COMPLETO')
console.log(novoUsuario.exibirInformacoes('completo'))
console.log('-')


console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log('-')

// Usando os Getters
console.log(novoDocente.nome)
console.log('-')

// Usando Setters
novoDocente.nome = 'Regina Ruiz Rodrigues'
novoDocente.email = 'r.marcia@fake.io'
console.log(novoDocente.exibirInfos())
console.log('-')

// Verificações realizadas nos setters
// novoDocente.nome = ''
// console.log('-')

const novoAdmin = new Admin('Rodrigo', 'Almeida', 'rodrigo@fake.io', '1989-03-12')
console.log(novoAdmin.exibirInfos())
console.log('-')

// Usar um método estático, ou métodos de classe
const dadosFicticios = User.exibirInfosGenericas('Julia', 'julia@fake.io')
console.log(dadosFicticios)
