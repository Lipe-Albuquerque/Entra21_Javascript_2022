$('body').append(
    $("<a>", {
        class: "btn btn-warning btn-lg",
        href:"index.html",
        role:"button",
        text:"Home"
    })
)
$("body").attr("class","container")
$("<main>",{class:"row"}).append(
    $("<section>",{class:"col"}).append(
        $("<div>",{class:"card"}).append(
            $("<div>",{class:"card-body"}).append(
                $("<ul>").append(
                    $("<li>").append(
                        $("<a>",{href:"/aula05_horizontal.html",text:"Site horizontal"})
                    ), 
                    $("<li>").append(
                        $("<a>",{href:"/aula05_vertical.html",text:"Site vertical"})
                    ),
                )
                ) 
        )
    )
).appendTo("body")