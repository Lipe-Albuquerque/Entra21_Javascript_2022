// $.ajax(
// {

// }
// )

$("#meu_ip").on("click", function () {
  $.ajax({
    url: "https://httpbin.org/ip",
    type: "get",
    success: function (retorno) {
      console.log("Olá, funfou", retorno);
    },
    error: function (motivo) {
      console.warn("Deu ruim papai", motivo);
    },
  });
});

$("#eco_get").on("click", function () {
  $.ajax({
    url: encodeURI("https://httpbin.org/get?nome=filipe albuquerque&idade=33"),
    type: "get",
    success: function (retorno) {
      console.log("deu certo", retorno);
    },
    error: function (eroouu) {
      console.warn("errou", eroouu);
    },
  });
});

$("#data").on("click", function () {
                // objeto a ser enviado no body
  var objeto = {
    nome: "Filipe",
    email: "dev.flipe@gmail.com",
  };
  $.ajax({
    url: encodeURI("https://httpbin.org/post"),
    type: "post",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    data: JSON.stringify(objeto),               //converte objeto em string
    success: function (dados) {
      console.log(dados);
    },
    error: function (erro) {
      console.error(erro);
    },
  });
});


$('#buscar_pokemon').on('click', ()=>{
    console.log("Iniciando busca!");
    let key = $('#poke').val()
    console.log("vamos buscar por ", key);

    $.ajax(
        {
            url:encodeURI('https://pokeapi.co/api/v2/pokemon/'+key),
            type:'get',
            success:(retorno)=>{
                console.log("quem é essa o pokemon ?"+retorno);
                $('body').append(
                    $('<div>', {class:'row'}).append(
                        $('<div>', {class: 'col-1', text:retorno.id}),
                        $('<div>', {class: 'col-3', text:retorno.name}),
                        $('<div>', {class: 'col'}).append(
                            $('<img>', {src:retorno.sprites.front_default})
                        ),
                    )
                )
            },
            error:(opa)=>{
                console.warn(opa);
            }

        }
    )

})