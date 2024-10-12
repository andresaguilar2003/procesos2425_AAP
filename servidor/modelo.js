function Sistema(){
    this.usuarios=[]; /* que tipo de coleccion??*/
    //operaciones sobre la coleccion
    this.agregarUsuario=function(nick){
        if(!this.usuarios[nick]){
            this.usuarios[nick]=new Usuario(nick);
        }
    }
    this.eliminarUsuario=function(nick){
        res=false;
        if(this.usuarios[nick]){
            delete this.usuarios[nick];
            res=true;
        }
        return res;
    }
    this.obtenerUsuarios=function(){
        return this.usuarios;
    }
    this.usuarioActivo=function(nick){
        if(this.usuarios[nick]){
            return true;
        }
        else{
            return false;
        }
    }
    this.numeroUsuarios=function(){
        return Object.keys(this.usuarios).length;
    }
}

function Usuario(nick){
    this.nick=nick;
}


module.exports.Sistema=Sistema