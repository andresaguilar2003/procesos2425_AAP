function ControlWeb() {
    var clienteRest = new ClienteRest();

    this.mostrarAgregarUsuario = function () {
        // Construcción de la cadena HTML
        let cadena = '<div id="mAU" class="form-group">';
        cadena += '<label for="nick">Name:</label>';
        cadena += '<input type="text" class="form-control" id="nick">';
        cadena += '<button id="btnAU" type="button" class="btn btn-primary">Submit</button>';
        cadena += '</div>';

        // Inserción del formulario en el div con id "au"
        $("#au").append(cadena);

        // Asociar el evento click al botón para agregar usuario
        $("#btnAU").on("click", function () {
            let nick = $("#nick").val(); // Obtén el valor del input
            if (nick) {
                clienteRest.agregarUsuario(nick); // Llama al método agregarUsuario
                $("#mAU").remove(); // Elimina el formulario después de agregar
            } else {
                console.log("El campo de nombre no puede estar vacío");
            }
        });
    };
}


// Inicializa el objeto ControlWeb cuando el DOM esté listo
$(document).ready(function () {
    var controlWeb = new ControlWeb();
    controlWeb.init();
});
