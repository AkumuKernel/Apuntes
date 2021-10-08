"use strict";

const reproductor = {
  reproducir: function(id){
    console.log(`${id} reproducir...`);
  },
  pausa: function(){
    console.log(`pausando...`);
  },
  crearPlaylist: function(name) {
    console.log(`${name} creado`)
  },
}

reproductor.borrarCancion = function(id){
  console.log(`Eliminando la canción ${id}`);
}

reproductor.reproducir(10);
