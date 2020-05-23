const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

// trabalhando com promisses
function usuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Jeck',
        idade: 20,
      })
    }, 1000);
  })
}

function obterTelefoneUser(idUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefone: '63 3322-8080',
      })
    }, 2000);
  })
}

function obterEndereco(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      endereco: 'av dos bobos da corte',
    })
  }, 2000);
}

main()
async function main() {
  try {
    const user = await usuario()
    const telefone = await obterTelefoneUser(user.id)
    const endereco = await obterEnderecoAsync(user.id)
    console.log(`Nome ${user.nome} Endereco ${endereco.endereco} Telefone ${telefone.telefone}`)
  } catch (error) {
    console.error('error', error)
  }
}
