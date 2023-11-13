const nome_auto = document.getElementById("nome").innerHTML
const nome_lugar = document.getElementById("nome_lugar").innerHTML
const pais = document.getElementById("pais").innerHTML
const cidade = document.getElementById("cidade").innerHTML
const descricao = document.getElementById("decricao").innerHTML

const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("passeio.json"))
const novoPasseio = {nome: nome_auto, nome_lugar: nome_lugar, cidade: cidade, pais: pais, descricao: descricao}


fs.writeFileSync("passeio.json", JSON.stringify([...dadosAtuais, novoPasseio]))
