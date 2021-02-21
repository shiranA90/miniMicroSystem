export const externalServicesConfig = {
    log: {
        host: process.env.LOG_SERVICE_HOST || 'log-service',
        port: process.env.LOG_SERVICE_PORT || '5001',
        protocol: process.env.LOG_SERVICE_PROTOCOL|| 'http',
    }

}