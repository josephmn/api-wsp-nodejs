![node](https://img.shields.io/badge/nodejs-12_or_higher-blue)
![npm](https://img.shields.io/badge/npm-9.8.1-brightgreen)
![wsp](https://img.shields.io/badge/whatsapp_web.js-v1.22.2_alpha.1-brightgreen)
![express](https://img.shields.io/badge/express-4.18.2-brightgreen)
![qrcode](https://img.shields.io/badge/qrcode_terminal-0.12.0-brightgreen)

# API WhatsApp (v1.0)

Para esta aplicación se usó la librería whatsapp-web.js (https://wwebjs.dev/).

## Requisitos previos

* Tener instalado una versión de nodejs 12 o superior, para que pueda funcionar la librería.
* Tener un número de celular con WhatsApp Web.

## Instalación

1. Descargar el repositorio.  
2. Ejecutar: **npm install**, aqui ya se encuentra todas las dependencias necesarias.
3. Ejecutar el proyecto con el comando: **npm run dev**
4. En la consola debe salir un QR como el siguiente:

    ![Alt text](/img/image-1.png)

5. Al escanear el QR con la aplicación de WhatsApp este debe emitir el siguiente mensaje en la consola, que valida que la conexión fue exitosa:

    ![Alt text](/img/image-2.png)

6. El aplicativo tiene como puerto configurado el **3000**, pero este puede ser cambiado según necesidad.
7. Para poder consumir el API con **POSTMAN**, este sería la estructura (**POST**):

    ![Alt text](/img/image-3.png)
    ```
    URL dev: http://localhost:3000/sendmensaje  
    ```
    Siendo: **sendmensaje** el método para poder enviar los mensajes.

    La estructura body para ejecutarse sería el siguiente:
    ```
    {
        "contacto": "51987654321",
        "mensaje": "Estoy probando mi API 😉"  
    }
    ```
    * No olvidar anteponer el 51 adelante del número celular, ya que corresponde al código de país en el caso Perú (+51), pero sin el mas (+).

8. Cuando se envíe el método al API, este devuelve el siguiente mensaje:

    ![Alt text](/img/image-4.png)

9. A su vez en la raíz del proyecto se creó una carpeta con el nombre de **log**, dentro de la carpeta se crear un archivo txt que tendrá como nombre la fecha de ejecución, vea el ejemplo siguiente:

    ![Alt text](/img/image-5.png)

    El archivo contiene los envíos de mensaje que se realicen desde el API:

    ![Alt text](/img/image-6.png)

## Uso

El aplicativo se puede usar para enviar recordatorios diarios o notificaciones a clientes si se requiere para un proyecto, o según la necesidad, esta es solo una primera versión para el objetivo que fue desarrollado.

## Contribuir

Por el momento no hay contribuciones.

## Créditos

Vídeo tuto+ que brindo la noción y explicación de su vídeo de cómo se usa la librería, así como una demo de recordatorio.  
[![tuto+](https://img.shields.io/badge/canal_Youtube-tuto+-red)](https://www.youtube.com/@tutomas)
[![video](https://img.shields.io/badge/video_tutorial-Automatizar_recordatorios_whatsapp_nodejs-red)](https://www.youtube.com/watch?v=F_bZlD6HiXc&t=2s)
