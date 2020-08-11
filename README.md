### Callback, Promisse e Async/Await

<h1> Callback 🙁 </h1>

<p> Javascript pode ter ciclos diferentes de resposta em requisições, as coisas não
vão acontecer conforme uma fila, você precisa definir o que vai acontecer e quando vai
acontecer, caso contrário a linguágem acaba se enrolando (se perdendo). </p>

<p> As callbacks são uma forma fácil e ilegível "em minha opinião é claro" que podem facilmente gerar erros, não porque elas não são boas, mas porque são difíceis de ler ou compreender, no primeiro commit tem um exemplo no index de como resolver requisições que são dependentes de outras. </p>
[ Arquivo de Referência ]( https://github.com/andremartds/js_callback_promisse_asyck_await/blob/master/callback.js )
<h1> Promisse 😎 </h1>

<p> Uma forma bem melhor de resolver objetos e funções assincronas no javascrip, as programação deixam mais clara e intuitiva a nossa lógica. Como o nome já diz ela se trata de uma promessa que pode ser aceita "then" e aceita quantas vezes quisermos, ou seja podemos chamar then de forma encadeada, elas também podem ser recusadas e nesse caso utilizamos o catch </p>
[ Arquivo de Referência ]( https://github.com/andremartds/js_callback_promisse_asyck_await/blob/master/promisses.js )

<h1> Async/Await 😍  </h1>

<p> O async/await é claro, resolve tudo como promisse mas pro deibaixo dos
panos, fica um codigo lindo.</p>
[ Arquivo de referência ]( https://github.com/andremartds/js_callback_promisse_asyck_await/blob/master/asyncawait.js )
