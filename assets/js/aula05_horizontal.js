$('body').append(
    $("<a>", {
        class: "btn btn-warning btn-lg",
        href:"aula05.html",
        role:"button",
        text:"Return"
    })
)
$("body").attr("class", "container mt-4");

$("<header>", { class: "row" })
  .append(
    $("<section>", { class: "col" }).append(
      $("<div>", { class: "card" }).append(
        $("<div>", { class: "card-body text-center" }).append(
          $("<h1>", { text: "Página horizontal" }),
          $("<a>", { href: "/aula05_vertical.html",  text: "Vertical" }),
          $("<a>", { href: "/aula05_crud.html", text: "CRUD", target: "_blank" })
        )
      )
    )
  )
  .appendTo('body');

$("header .card-body a").attr("class", "btn btn-outline-primary me-2");

$("<main>", { class: "row mt-4" })
  .append(
    $("<section>", { class: "col" }).append(
      $("<div>", { class: "card" }).append(
        $("<div>", { class: "card-body" }), 
        $("<div>", { class: "card-footer",text:"site toda escrita com jQuery" })
      )
    )
  )
  .appendTo("body");


  $("main .card-body").append(
    $("<table>",{class:"table table-bordered table-striped table-hover"}).append(
        $("<thead>").append(
            $("<th>",{text:"Nome"}),
                $("<th>",{text:"Idade"}),
                $("<th>",{text:"Cidade"}),
        ),
        $("<tbody>").append(
            $("<tr>").append(
                $("<td>",{text:"Filipe"}),
                $("<td>",{text:"20"}),
                $("<td>",{text:"Imbituba"}),
            ),
            $("<tr>").append(
                $("<td>",{text:"Ariana"}),
                $("<td>",{text:"22"}),
                $("<td>",{text:"Joaçaba"}),
            ),
        )
    )
  )


