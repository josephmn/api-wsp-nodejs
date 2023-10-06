function imprimirHoraActual() {
    const fecha = new Date();
    const hora = String(fecha.getHours()).padStart(2, '0'); // hora
    const minuto = String(fecha.getMinutes()).padStart(2, '0'); // minuto
    const segundo = String(fecha.getSeconds()).padStart(2, '0'); // segundo
    const horaFormateada = `${hora}:${minuto}:${segundo}`;
    return horaFormateada;
};

function fileHoraActual() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0'); // Día
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Mes
    const año = fecha.getFullYear(); // Año
    const fechaFormateada = `${dia}-${mes}-${año}`;
    return fechaFormateada;
};

module.exports = {
    imprimirHoraActual,
    fileHoraActual
}