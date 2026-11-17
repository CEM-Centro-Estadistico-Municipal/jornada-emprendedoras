/* Configuración de la jornada — es lo único que hay que tocar después de publicar el backend */
window.JORNADA = {
  // URL del Apps Script publicado como app web (termina en /exec)
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbw2mWntNrO1cc9mkkKGHB71BJF0xrfcvAIT9LBs6qcvtsPZ2rhI_JNqeieEkLc47hfX/exec',

  // Opcionales: si los completás, aparecen como filas de info en el formulario de inscripción
  FECHA: '',   // ej. 'Jueves 19 de noviembre, 18 hs'
  LUGAR: '',   // ej. 'Salón de usos múltiples'

  // Opcional: nombres de las expositoras. Si hay al menos una, la pregunta puede dirigirse a una en particular.
  EXPOSITORAS: []  // ej. ['Nombre Apellido', 'Nombre Apellido']
};
