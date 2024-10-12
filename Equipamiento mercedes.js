var equipamientoBase = [
    "Asistente de frenado activo", 
    "Protección de Peatones", 
    "Tren de rodaje de Comfort",
    "Volante en Cuero", 
    "Ayuda al Arranque en Pendientes", 
    "Panel táctil con controlador central",
    "Altavoces delante y detrás",
    "Toma de corriente de 12 v en maletero",
    "Paquete profesional Mercedes me connect",
    "Sistema de llamada de emergencia Mercedes-Benz",
    "Asistente a la conducción: Gestión en carretera",
    "Espejos retrovisores calefactables y regulables eléctricamente",
    "Cambio automático 9g-tronic",
    "Sistema de alerta por cansancio attention assist",
    "Smartphone Integration Apple Carplay y Android Auto",
    "Cámara de marcha atrás",
    "Ayuda Activa Para Aparcar",
    "Detector Activo de Cambio de Carril (Cámara)",
    "Sistema de Advertencia de Colisión con Intervención Activa en el Freno, Avisador Anticolisión-Parada",
    "Limpiaparabrisas con sensor de lluvia",
    "Sistema de Llamada de Emergencia E-Call",
    "Cambio de Doble Embrague Automático de 8 marchas",
    "Control de la Presión de Inflado de los Neumáticos",
    "Tamaño de Llanta de 19",
    "Paquete Ajustes Comfort",
    "Paquete de Visibilidad Exterior",
];

// Selecciona todos los elementos <textarea> con clase "anyadidoControl"
var elementosEquipamiento = document.querySelectorAll('textarea.anyadidoControl');

// Función para verificar similitudes con un número mínimo de palabras coincidentes
function sonSimilares(texto1, texto2, minPalabras) {
    // Compara las palabras en texto1 y texto2
    let palabras1 = texto1.split(' ').map(p => p.replace(/[^a-zA-Z0-9]/g, '').toLowerCase());
    let palabras2 = texto2.split(' ').map(p => p.replace(/[^a-zA-Z0-9]/g, '').toLowerCase());

    // Contar coincidencias
    let coincidencias = palabras1.filter(p => palabras2.includes(p)).length;

    // Devuelve verdadero si las coincidencias son mayores o iguales al umbral de palabras
    return coincidencias >= minPalabras;
}

// Itera sobre los elementos de equipamiento
elementosEquipamiento.forEach(function(el) {
    var nombre = el.value.trim();  // Usamos el valor del <textarea>
    
    if (equipamientoBase.includes(nombre) || equipamientoBase.some(e => sonSimilares(e, nombre, 3))) {
        el.style.backgroundColor = 'lightgreen'; // Resalta en verde claro las coincidencias exactas o con 3 o más palabras coincidentes
    } else if (equipamientoBase.some(e => sonSimilares(e, nombre, 2))) { 
        el.style.backgroundColor = 'yellow'; // Resalta en amarillo las que tengan exactamente 2 palabras coincidentes
    }
});
