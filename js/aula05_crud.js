$("#update").hide();
var pessoas = [];
var update = null;
escreverTabela();

$("form").on("submit", function (event) {
  event.preventDefault();
  let dados = obterDados();

  if ($("#add").is(":visible")) {
    people.push(dados);

    console.log("Added");
  } else {
    people[people.indexOf(update)] = dados;
    $("#add").toggle();
    $("#update").toggle();
    console.log("Updated");
  }
  escreverTabela();
  $("#clean").click();
});

$("#clean").on("click", function () {
  $("#add").show();
  $("#update").hide();
});

function obterDados() {
  let name = $("#nome").val();
  let age = $("#idade").val();
  let city = $("#cidade").val();

  return {
    name: name,
    age: age,
    city: city,
  };
}

function escreverTabela() {
  $("tbody").empty();

  people.forEach((persona) => {
    $("tbody").append(
      $("<tr>").append(
        $("<td>", { text: persona.name }),
        $("<td>", { text: persona.age }),
        $("<td>", { text: persona.city }),
        $("<td>").append(
          $("<button>", {
            text: "Edit",
            class: "btn btn-outline-primary",
            click: function () {
              update = persona;
              $("#nome").val(persona.name);
              $("#idade").val(persona.age);
              $("#add").toggle();
              $("#update").toggle();
            },
          }),
          $("<button>", {
            text: "Delete",
            class: "btn btn-outline-danger",
            click: function () {
                people.splice(persona.indexOf(persona), 1);
              escreverTabela();
            },
          })
        )
      )
    );
  });
}