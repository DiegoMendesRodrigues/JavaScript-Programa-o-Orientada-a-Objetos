/**
 * Objeto com propriedades e métodos (funções)
 * 
 * Não utilizamos arrow functions para criar métodos, pois elas possuem apenas
 * o contexto de onde são executadas, ou seja, perdemos a contextualização, 
 * desta forma, perdemos o this.
 */
const user = {
  nome: 'Diego',
  email: 'diego@fake.io',
  nascimento: '1982-07-08',
  role: 'estudante',
  ativo: true,
  exibirInfo: function () {
    console.log(`Nome: ${this.nome}`)
    console.log(`E-mail: ${this.email}`)
    console.log(`Data de nascimento: ${this.nascimento}`)
    console.log(`Tipo: ${this.role}`)
    console.log(`Está ativo: ${this.ativo ? 'Sim' : 'Não'}`)
  }
}

user.exibirInfo()
console.log('-')

// Função criada de forma descontextualizada
const exibir = function () {
  console.log(this.nome, this.email)
}
exibir()
console.log('-')

/**
 * Usamos bind() para ligar (bind) o valor de this a um determinado contexto.
 * Conectar a função exibir com o objeto user, contextualizando ela
 */
const exibirNomeEmail = exibir.bind(user)
exibirNomeEmail()
console.log('-')


/**
 * call()
 * O método call() executa a função passando valores e parâmetros específicos 
 * para serem usados como contexto do this, ou seja, é possível atribuir um this 
 * diferente do contexto atual ao executar a função.
 */
function Usuario(nome, email) {
  this.nome = nome
  this.email = email

  this.exibeInfos = function () {
    console.log(this.nome, this.email)
  }
}

const novoUsuario = new Usuario('Bruna', 'bruna@fake.io')
novoUsuario.exibeInfos()

const pessoa = {
  nome: 'Regina',
  email: 'regina@fake.io',
}

novoUsuario.exibeInfos.call(pessoa)
console.log('-')


/**
 * Também é possível passar parâmetros para call(), como no próximo exemplo.
 * 
 * Temos uma função que mostra uma determinada mensagem a partir dos parâmetros
 *  nome e email. 
 * Se quiséssemos vincular os dados da mensagem a um objeto com dados de 
 * usuários, podemos usar call() passando como primeiro parâmetro o contexto a ser 
 * considerado como this (no caso, objeto user) e a partir do segundo parâmetro 
 * definimos quais os argumentos.
 */
function exibirMensagem(nome, email) {
  console.log(`Usuário: ${nome} - E-mail: ${email}`)
}

const usuario = {
  nome: 'Julia',
  email: 'julia@fake.io',
  executarFuncao: function (fn) {
    fn.call(usuario, this.nome, this.email)
  }
}

usuario.executarFuncao(exibirMensagem)
console.log('-')


/**
 * apply()
 * O método apply() funciona de forma semelhante ao call(), porém recebe a lista de 
 * argumentos em um array.
 * Usando arrays, é possível passar os argumentos via variável ou até mesmo usando 
 * a propriedade arguments que existe internamente em todo objeto.
 */
const professor = {
  nome: 'Roberto',
  email: 'roberto@fake.io',
  executarFuncao: function (fn) {
    fn.apply(professor, [this.nome, this.email])
  }
}

professor.executarFuncao(exibirMensagem)
console.log('-')
