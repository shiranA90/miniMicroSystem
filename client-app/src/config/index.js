export const externalServicesConfig = {
    clientArrays: {
        host: process.env.REACT_APP_CLIENT_ARRAYS_SERVICE_HOST || 'client-arrays-service',
        port: process.env.REACT_APP_CLIENT_ARRAYS_SERVICE_PORT || '5000',
        protocol: process.env.REACT_APP_CLIENT_ARRAYS_SERVICE_PROTOCOL|| 'http',
    }
}
