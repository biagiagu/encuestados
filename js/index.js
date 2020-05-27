//instancio el Modelo
var modelo = new Modelo();

//Instancio y luego inicio la vista de Administradr
var vistaAdmin = new VistaAdministrador(modelo, new Controlador(modelo), {
  'lista': $('#lista'),
  'botonEditarPregunta': $('#editarPregunta'),
  'botonBorrarPregunta': $('#borrarPregunta'),
  'borrarTodo': $('#borrarTodo'),
  'pregunta': $('#pregunta'),
  'respuesta': $('#respuesta'),
  'formulario': $('localStorageForm'),
  'botonAgregarPregunta': $('#agregarPregunta'),
  'muestraDeRespuestas': $('.panel-body')
});

vistaAdmin.inicializar();

//Instancio y luego inicio la vista de Usuario
var vistaUsuario = new VistaUsuario(modelo, new Controlador(modelo), {
  'listaPreguntas': $('#preguntas'),
  'botonAgregar': $('#agregarBoton'),
  'nombreUsuario' : $('#nombreUsuario'),
  'graficosDeTorta' : $('#graficosDeTorta'),
});

vistaUsuario.inicializar();