/*
 * Modelo
 */
var Modelo = function () {
	this.preguntas = JSON.parse(localStorage.getItem("preguntas")) || [];
	this.ultimoId = 0;

	//inicializacion de eventos
	this.preguntaAgregada = new Evento(this);
	this.preguntaEliminada = new Evento(this);
	this.preguntasBorradas = new Evento(this);
	this.preguntaEditada = new Evento(this);
	this.preguntaVotada = new Evento(this);
};

Modelo.prototype = {
	//se obtiene el id más grande asignado a una pregunta
	obtenerUltimoId: function () {
		var maxId = -1;
		this.preguntas.forEach((element) => {
			if (element.id > maxId) {
				maxId++;
			}
		});
		return maxId;
	},

	//se agrega una pregunta dado un nombre y sus respuestas
	agregarPregunta: function (nombre, respuestas) {
		var id = this.obtenerUltimoId();
		id++;
		var nuevaPregunta = {
			textoPregunta: nombre,
			id: id,
			cantidadPorRespuesta: respuestas,
		};
		this.preguntas.push(nuevaPregunta);
		this.guardar();
		this.preguntaAgregada.notificar();
	},
	borrarPregunta: function (idPregunta) {
		var index = this.preguntas.findIndex((x) => x.id == idPregunta);
		this.preguntas.splice(index, 1);
		this.guardar();
		this.preguntaEliminada.notificar();
	},
	//borramos todas las preguntas
	borrarTodo: function() {
		this.preguntas = [];
		this.guardar();
		this.preguntasBorradas.notificar();
	  },
	  //editamos la pregunta seleccionada
	  editarPregunta: function(idPregunta, nuevaPregunta) {
		var index = this.preguntas.findIndex(x => x.id == idPregunta);
		this.preguntas[index].textoPregunta = nuevaPregunta;
		this.guardar();
		this.preguntaEditada.notificar();
	  },
	  //votamos
	  agregarVotos: function(nombrePregunta, respuestaSeleccionada) {
		this.preguntas.forEach(function(pregunta) {
		  if (pregunta.textoPregunta === nombrePregunta) {
			pregunta.cantidadPorRespuesta.forEach(function(respuesta) {
			  if (respuesta.textoRespuesta === respuestaSeleccionada) {
				respuesta.cantidad += 1;
			  }
			});
		  }
		});
		this.guardar();
		this.preguntaVotada.notificar();
	  },

	//se guardan las preguntas
	guardar: function () {
		localStorage.setItem("preguntas", JSON.stringify(this.preguntas));
	},
};
