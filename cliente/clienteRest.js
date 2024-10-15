function ClienteRest() {
    this.agregarUsuario = function (nick) {
        var cli = this;
        $.getJSON("/agregarUsuario/" + nick, function (data) {
            if (data.nick != -1) {
                console.log("Usuario " + nick + " ha sido registrado");
            } else {
                console.log("El nick ya está ocupado");
            }
        });
    };

    // Nueva función agregarUsuario2 usando $.ajax
    this.agregarUsuario2 = function (nick) {
        $.ajax({
            type: 'GET',
            url: '/agregarUsuario/' + nick,
            success: function (data) {
                if (data.nick != -1) {
                    console.log("Usuario " + nick + " ha sido registrado");
                } else {
                    console.log("El nick ya está ocupado");
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType: 'application/json'
        });
    };

    // Implementación de obtenerUsuarios()
    this.obtenerUsuarios = function () {
        $.ajax({
            type: 'GET',
            url: '/obtenerUsuarios',
            success: function (data) {
                console.log("Usuarios:", data);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType: 'application/json'
        });
    };

    // Implementación de numeroUsuarios()
    this.numeroUsuarios = function () {
        $.ajax({
            type: 'GET',
            url: '/numeroUsuarios',
            success: function (data) {
                console.log("Número de usuarios:", data);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType: 'application/json'
        });
    };

    // Implementación de usuarioActivo(nick)
    this.usuarioActivo = function (nick) {
        $.ajax({
            type: 'GET',
            url: '/usuarioActivo/' + nick,
            success: function (data) {
                console.log("Usuario activo:", data);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType: 'application/json'
        });
    };

    // Implementación de eliminarUsuario(nick)
    this.eliminarUsuario = function (nick) {
        $.ajax({
            type: 'GET',
            url: '/eliminarUsuario/' + nick,
            success: function (data) {
                console.log("Usuario eliminado:", data);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType: 'application/json'
        });
    };
}
