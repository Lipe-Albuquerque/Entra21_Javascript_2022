console.warn("READ");
let leitura = document.getElementById("paragrafo_ler");

console.log(leitura);

console.log("Apenas o conteudo ou textContent", leitura.textContent);
console.log("Apenas o conteudo mais elementos internos com HTML", leitura.innerHTML);


let aprendendoLeitura = document.getElementById("teste_1");

console.log("Apenas o conteudo ou textContent", aprendendoLeitura.textContent);
console.log("Apenas o conteudo mais o elementos internos com HTML", aprendendoLeitura.innerHTML);

console.warn("READ MORE");
let paragrafos = [...document.getElementsByTagName("p")];



console.log("Todos os parágrafos", paragrafos);
paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});

console.warn("write");
let escrita = document.getElementById("ta_aqui");
escrita.title = "www.google.com";
escrita.textContent = "Esse paragrafo foi escrito com javascript";

document.getElementById("voltar").textContent = "Botão alterado com javascript(voltar)";

let alterarText1 = document.getElementById("alterar1");
let alterarText2 = document.getElementById("alterar2");

alterarText1.textContent = "Escrito com JS rs";
alterarText2.textContent = "Escrito com JS rs2";

function mudarTexto(conteudo){
    let elemento = document.getElementById("qualquer");
    elemento.title = conteudo;
    elemento.textContent = conteudo;
}

function addConteudo(conteudo){
    let enter = document.createElement("br");
    document.body.append(enter);

    let elemento = document.createElement("div");
    elemento.textContent = conteudo;

    document.body.append(elemento);

    



}
