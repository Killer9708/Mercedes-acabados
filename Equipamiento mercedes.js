// Lista de equipamiento base (base de datos)var equipamientoBase = [    "Asistente de frenado activo", "Protección de Peatones", "Tren de rodaje de Comfort", "Volante en Cuero", "Ayuda al Arranque en Pendientes", "Panel táctil con controlador central", "Altavoces delante y detrás", "Toma de corriente de 12 v en maletero", "Paquete profesional Mercedes me connect", "Sistema de llamada de emergencia Mercedes-Benz", "Asistente a la conducción: Gestión en carretera", "Espejos retrovisores calefactables y regulables eléctricamente", "Cambio automático tronic", "Sistema de alerta por cansancio attention assist", "Smartphone Integration Apple Carplay y Android Auto", "Cámara de marcha atrás", "Ayuda Activa Para Aparcar", "Detector Activo de Cambio de Carril", "Sistema de Advertencia de Colisión con Intervención Activa en el Freno, Avisador Anticolisión-Parada", "Limpiaparabrisas con sensor de lluvia", "Sistema de Llamada de Emergencia E-Call", "Cambio de Doble Embrague Automático de 8 marchas", "Control de la Presión de Inflado de los Neumáticos", "Tamaño de Llanta de ", "Paquete Ajustes Comfort", "Paquete de Visibilidad Exterior", "Retrovisor Interior y exterior antideslumbrante y abatible", "Sistema Multimedia Mbux Premium", "Keyless-Go", "Carga del Teléfono Inalámbrico, Delante", "Cambio Automático", "Función HOLD", "Volante multifuncion", "Retrovisor interior con sistema antideslumbrante automático", "Paquete contenido multimedia digital", "Faros LED Intelligent Light System", "Cristales calorífugos tintados oscuros en ventanillas y luneta trasera", "Kit estético AMG", "Airbags rodillas", "Airbags laterales detrás", "Camara 360", "Iluminacion Ambiente Premium Plus", "Climatización automática THERMOTRONIC", "Sistema de frenos deportivos", "Iluminación del entorno del vehículo con proyección del logotipo de la marca", "Paquete Advanced", "Paquete para el compartimento de carga", "Sistema de iluminación inteligente", "Iluminación de ambiente", "Paquete de asientos de confort", "Asientos deportivos", "Volante con Multifunción","Detección de señal de velocidad"];// Lista de conectores que no se deben tener en cuentavar conectores = ["al", "de", "para", "la", "el", "en", "y", "con", "por", "a", "del", "los", "las", "un", "una"];// Selecciona todos los elementos <textarea> con clase "anyadidoControl"var elementosEquipamiento = document.querySelectorAll('textarea.anyadidoControl');// Selecciona todos los checkbox con el atributo data-idvar checkboxesEquipamiento = document.querySelectorAll('input[type="checkbox"][name="borrado_multiple_extras_anyadidos"]');// Función para verificar similitudes con un número mínimo de palabras coincidentesfunction sonSimilares(texto1, texto2, minPalabras) {    // Compara las palabras en texto1 y texto2, filtrando los conectores y convirtiendo todo a minúsculas    let palabras1 = texto1.toLowerCase()                          .split(' ')                          .map(p => p.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())                          .filter(p => !conectores.includes(p));                              let palabras2 = texto2.toLowerCase()                          .split(' ')                          .map(p => p.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())                          .filter(p => !conectores.includes(p));    // Contar coincidencias    let coincidencias = palabras1.filter(p => palabras2.includes(p)).length;    // Devuelve verdadero si las coincidencias son mayores o iguales al umbral de palabras    return coincidencias >= minPalabras;}// Itera sobre los elementos de equipamientoelementosEquipamiento.forEach(function(el, index) {    var nombre = el.value.trim();  // Usamos el valor del <textarea>        // Convertimos el valor del <textarea> a minúsculas para la comparación    var nombreEnMinusculas = nombre.toLowerCase();    // Checkbox correspondiente al índice actual usando el atributo data-id    var checkbox = checkboxesEquipamiento[index];        // Solo resalta si el texto ingresado no está vacío    if (nombreEnMinusculas.length > 0) { // Verifica si la casilla no está vacía        if (equipamientoBase.includes(nombreEnMinusculas) || equipamientoBase.some(e => sonSimilares(e, nombreEnMinusculas, 2))) {            el.style.backgroundColor = 'lightgreen'; // Resalta en verde claro las coincidencias exactas o con 2 o más palabras coincidentes en minúsculas            checkbox.checked = false; // Desmarca el checkbox si hay coincidencia exacta            checkbox.disabled = true; // Deshabilita el checkbox si hay coincidencia exacta        } else if (equipamientoBase.some(e => sonSimilares(e, nombreEnMinusculas, 1))) {             el.style.backgroundColor = 'yellow'; // Resalta en amarillo las que tengan exactamente 2 palabras coincidentes en minúsculas            checkbox.disabled = false; // Habilita el checkbox si solo hay coincidencias parciales        } else {            el.style.backgroundColor = ''; // Limpia el estilo si no hay coincidencias            checkbox.disabled = false; // Asegura que el checkbox esté habilitado si no hay coincidencias        }    } else {        el.style.backgroundColor = ''; // Limpia el estilo si la casilla está vacía        checkbox.disabled = false; // Asegura que el checkbox esté habilitado si la casilla está vacía    }});