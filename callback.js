function usuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: 'Jeck',
      idade: 20,
    })
  }, 1000);
}

function obterTelefoneUser(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '63 3322-8080',
    })
  }, 2000);
}

function obterEndereco(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      endereco: 'av dos bobos da corte',
    })
  }, 2000);
}

// não podemos trabalhar assim pois o javascript é assincrono e acaba executando
// o console.log do que o usuario
//usuario()
//console.log(usuario())

// ******* TRABALHANDO COM CALBACKS ********\\

// RESOLVEMOS O USUARIO E PASSAMOS O CALLBACK
usuario((error, usuario) => {
  if (error) {
    console.log('deu muito ruim!!!', error)
    return;
  }
  obterTelefoneUser(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.log('deu muito ruim!!!', error1)
      return;
    }

    obterEndereco(usuario.id, function resolveEndereco(error2, endereco) {
      if (error2) {
        console.log('deu muito ruim!!!', error1)
        return;
      }
      console.log(`Usuario: ${usuario.nome} | Telefone ${telefone.telefone} | Endereco ${endereco.endereco} `)
    })
  })
})