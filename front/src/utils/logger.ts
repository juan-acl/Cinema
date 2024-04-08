import { logger } from "react-native-logs";
import prettyFormat from 'pretty-format';

// Crear un nuevo objeto de logger
const baseLogger = logger.createLogger();

// Función para formatear el mensaje
const formatMessage = (message: any, ...args: any[]) => {
    if (typeof message === 'string') {
        // Si el mensaje es una cadena, simplemente devolvemos el mensaje
        return message;
    } else {
        // Si el mensaje es un objeto, un array u otra estructura de datos,
        // lo formateamos utilizando pretty-format
        return prettyFormat({ message, args });
    }
};

// Crear una nueva función de log que utilice el formato adecuado
const formattedLogger = {
    info: (message: any, ...args: any[]) => {
        const formattedMessage = formatMessage(message, args);
        baseLogger.info(formattedMessage);
    },
    warn: (message: any, ...args: any[]) => {
        const formattedMessage = formatMessage(message, args);
        baseLogger.warn(formattedMessage);
    },
    error: (message: any, ...args: any[]) => {
        const formattedMessage = formatMessage(message, args);
        baseLogger.error(formattedMessage);
    },
    // Puedes agregar más métodos según sea necesario, como debug, verbose, etc.
};

export default formattedLogger;
