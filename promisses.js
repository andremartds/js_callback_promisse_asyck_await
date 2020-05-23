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

const recebeUsuario = usuario()

recebeUsuario
  .then(usuario => {
    return obterTelefoneUser(usuario.id)
      .then((result) => {
        return {
          usuario: {
            nome: usuario.nome,
            id: usuario.id,
          },
          telefone: result,
        }
      })
  })
  .then(resultado => {
    return obterEnderecoAsync(resultado.usuario.id)
      .then(result => {
        return {
          usuario: {
            nome: resultado.usuario.nome,
            id: resultado.usuario.id,
          },
          telefone: resultado.telefone.telefone,
          endereco: result
        }
      })
  })
  .then(resultado => {
    console.table(resultado)
  })
  .catch(error => {
    console.log('ERRRRRRORRRR', error)
  })