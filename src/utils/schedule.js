const config = require('config');
let tempoTarefa = 60000; // 900000 = 15 minutos, 60000 = 1 minuto

setInterval(async function () {
    try {
        console.log(`API server still running on port ${config.get('port')} \n ${new Date()}`);
    } catch (error) {
        log.error('** Erro na schedule da Compasso UOL **');
        log.error(`** Erro: ${error} **`);
    }

}, tempoTarefa);