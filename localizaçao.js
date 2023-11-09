/*const long = document.querySelector("#long")
const lati = document.querySelector("#lati")


if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(mostraLocalizaçao,errorLocalizaçao)

}else{
    console.log("Geolocalização não suportada")
}

function mostraLocalizaçao(pos){
    //console.log(pos)

    let long = pos.coords.longitude
    let lati = pos.coords.latitude

    document.getElementById("local").innerHTML = "<span class='fw-bold text-info'>Latitude: </span>"
    + lati + "<br><span class='fw-bold text-info'>Longitude: </span>" + long   

    //criado as opcões
    var mapOption = {
        center: [lati, long],
        zoom: 16
    }

    //Criando o objeto mapa
    var map = new L.map('map', mapOption);
    
    //criando a camada
    var layer =  new TitleLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    
    console.log(layer)

    map.addLayer(layer)
}*/


function errorLocalizaçao() {
    console.log("Ero ao obter a localização")
}

let h2 = document.querySelector('h2');
var map;

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;
}

function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});

