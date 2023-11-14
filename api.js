//let text = '{"employees":[' + '{"nome":" Artwil","nome_lugar":"Acampameto em frete ao Monte Fuji", "local_pais":" Japão", "cidade":" Fuji em Shizuoka", "descricao":"Autamente recomendado, o acampamento tem um lago para pescar e uma otima vista do catão posta do japão o Monte Fuji (富士山). A Cidade de Fuji em Shizuoka, a apenas 30 quilômetros do Monte Fuji, é conhecida por seu esplêndido chá verde, super recomendo.", "p_comentarista": "Alextacha", "comentario": "Que lindo vamos lá qualquer dia!", "lati": "-8.7579878", "long": "-63.8995221"}]}'

const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("passeio.json"))

const nome_Auto = JSON.parse(dadosAtuais);
document.getElementById("autor_nome").innerHTML = "Publicado por: "+
nome_Auto.employees[0].nome;

const nome_luga = JSON.parse(text);
document.getElementById("ler_nome_lugar").innerHTML = 
nome_luga.employees[0].nome_lugar;

const pais = JSON.parse(text);
document.getElementById("ler_pais").innerHTML = "País: " + 
pais.employees[0].local_pais;

const cindade = JSON.parse(text);
document.getElementById("ler_cidade").innerHTML =  "Cidade: " + 
cindade.employees[0].cidade;

const descricao = JSON.parse(text);
document.getElementById("ler_descricao").innerHTML = 
descricao.employees[0].descricao;

const comentarista = JSON.parse(text);
document.getElementById("comentarista").innerHTML = 
comentarista.employees[0].p_comentarista  + " comentou: ";

const comentario = JSON.parse(text);
document.getElementById("comentario").innerHTML = 
comentario.employees[0].comentario;

const latitude = JSON.parse(text);
document.getElementById("lati").innerHTML = 
latitude.employees[0].lati;

const longitude = JSON.parse(text);
document.getElementById("long").innerHTML = 
longitude.employees[0].long;


