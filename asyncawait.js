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
    console.time('medida-tempo')
    const user = await usuario()
    const resultado = await Promise.all([
      obterTelefoneUser(user.id),
      obterEnderecoAsync(user.id)
    ])
    //const telefone = await obterTelefoneUser(user.id)
    //const endereco = await obterEnderecoAsync(user.id)
    const telefone = resultado[0]
    const endereco = resultado[1]
    console.log(`Nome ${user.nome} Endereco ${endereco.endereco} Telefone ${telefone.telefone}`)
    console.timeEnd('medida-tempo')
  } catch (error) {
    console.error('error', error)
  }
}
