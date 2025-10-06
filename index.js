const express = require('express');
const { enviarMensaje } = require('./src/mensaje.js');
const { startAPI } = require('./src/api.js');
const { imprimirHoraActual, fileHoraActual } = require('./src/formateador.js');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const logFolderPath = path.join(__dirname, 'log'); // Ruta para guardar log

// si no existe el archivo se crea
if (!fs.existsSync(logFolderPath)) {
    fs.mkdirSync(logFolderPath, ''); // Crea un archivo vacío
}

const flog = fileHoraActual();

const logFilePath = path.join(logFolderPath, `${flog}.log`);

// Middleware para procesar solicitudes JSON
app.use(express.json());

(async () => {
    try {
        const cliente = await startAPI(); // Iniciamos cliente WhatsApp
        
        // Inicia el servidor Express
        app.listen(PORT, () => {
            console.log(`API escuchando en el puerto ${PORT}`);
        });

        // ruta de envío /sendmensaje
        app.post('/sendmensaje', async (req, res) => {
            const { contacto, mensaje } = req.body;
            const contacto2 = contacto + '@c.us'; // actualizamos contacto, libreria -> 51987123456@c.us
            try {
                
                await enviarMensaje(cliente, contacto2, mensaje); // ejecuta proceso de envío de mensaje
                res.status(200).json({
                    code: "200",
                    status: "ok",
                    mensaje: 'Mensaje enviado con éxito'
                });

                const hournow = imprimirHoraActual();
                const registro = `- ${hournow} Mensaje enviado a ${contacto} -> "${mensaje}"\n`; // registro en log para revisión
                fs.appendFile(logFilePath, registro, (err) => {
                    if (err) {
                        console.error('Error al guardar el registro:', err);
                    }
                });

            } catch (error) {
                console.error('Error al enviar el mensaje:', error);
                res.status(500).json({
                    code: "500",
                    status: "error",
                    mensaje: error,
                });
            }
        });

    } catch (error) {
        console.error('Error al iniciar la API:', error);
    }
})();