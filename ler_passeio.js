const nome_auto = document.getElementById("nome").innerHTML
const nome_lugar = document.getElementById("nome_lugar").innerHTML
const pais = document.getElementById("pais").innerHTML
const cidade = document.getElementById("cidade").innerHTML
const descricao = document.getElementById("decricao").innerHTML
const lati = document.getElementById("lati").innerHTML
const long = document.getElementById("long").innerHTML

const fs = require("fs")
const { format } = require("path")

const dadosAtuais = JSON.parse(fs.readFileSync("passeio.json"))
const novoPasseio = {nome: nome_auto, nome_lugar: nome_lugar, cidade: cidade, pais: pais, descricao: descricao, latitude: lati, logitude: long}


fs.writeFileSync("passeio.json", JSON.stringify([...dadosAtuais, novoPasseio]))

alert("ok")
