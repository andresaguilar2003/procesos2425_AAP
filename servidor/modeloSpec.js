const modelo = require("./modelo.js");
describe('El sistema', function() {
    let sistema;
    beforeEach(function() {
        sistema = new modelo.Sistema();
    });

    it('inicialmente no hay usuarios', function() {
        expect(sistema.numeroUsuarios()).toEqual(0);
    });

    it('comprobamos agregar usuario con nick', function() {
        expect(sistema.numeroUsuarios()).toEqual(0);
        sistema.agregarUsuario("Pepe");
        expect(sistema.numeroUsuarios()).toEqual(1);
        expect(sistema.usuarioActivo("Pepe")).toEqual(true);
    });

    it('comprobamos eliminar usuario', function() {
        sistema.agregarUsuario("Pepe");
        expect(sistema.numeroUsuarios()).toEqual(1);
        expect(sistema.eliminarUsuario("Pepe")).toEqual(true);
        expect(sistema.numeroUsuarios()).toEqual(0);
        expect(sistema.usuarioActivo("Pepe")).toEqual(false);
    });

    it('comprobamos usuario activo', function() { // Elimina el parámetro "nick"
        expect(sistema.numeroUsuarios()).toEqual(0);
        sistema.agregarUsuario("Pepe");
        expect(sistema.numeroUsuarios()).toEqual(1);
        expect(sistema.usuarioActivo("Pepe")).toEqual(true);
    });

    it('comprobamos el metodo numero de usuarios', function() {
        sistema.agregarUsuario("Pepe");
        sistema.agregarUsuario("Juan");
        expect(sistema.numeroUsuarios()).toEqual(2);
        sistema.eliminarUsuario("Pepe");
        expect(sistema.numeroUsuarios()).toEqual(1);
    });
});
