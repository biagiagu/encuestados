/*
 * Controlador
 */
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
      this.modelo.agregarPregunta(pregunta, respuestas);
  },
  borrarPregunta: function(idPregunta){
	console.log(`llegamos al controlador con la pregunta: ${idPregunta}`);
	this.modelo.borrarPregunta(idPregunta);
  },
  borrarTodo: function(){
    this.modelo.borrarTodo();
  },
  editarPregunta: function(idPregunta, nuevaPregunta){
    this.modelo.editarPregunta(idPregunta, nuevaPregunta);
  }, 
  agregarVoto: function(nombrePregunta, respuestaSeleccionada){
    this.modelo.agregarVotos(nombrePregunta, respuestaSeleccionada);
  }
};
