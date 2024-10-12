const fs=require("fs");
const express = require('express');
const app = express();
const modelo = require("./servidor/modelo.js");

const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + "/"));

let sistema = new modelo.Sistema();

app.get("/", function(request,response){
var contenido=fs.readFileSync(__dirname+"/cliente/index.html");
response.setHeader("Content-type","text/html");
response.send(contenido);
});

app.get("/agregarUsuario/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.agregarUsuario(nick);
    response.send(res); });


// Ruta para eliminar un usuario
app.get("/eliminarUsuario/:nick", function(request, response) {
    let nick = request.params.nick;
    let res = sistema.eliminarUsuario(nick);
    response.send(res);
});

// Ruta para obtener el número de usuarios
app.get("/numeroUsuarios", function(request, response) {
    let numUsuarios = sistema.numeroUsuarios();
    response.send({ numero: numUsuarios });
});

// Ruta para verificar si un usuario está activo
app.get("/usuarioActivo/:nick", function(request, response) {
    let nick = request.params.nick;
    let activo = sistema.usuarioActivo(nick);
    response.send({ activo: activo });
});


app.listen(PORT, () => {
    console.log(`App está escuchando en el puerto ${PORT}`);
    console.log('Ctrl+C para salir');
});