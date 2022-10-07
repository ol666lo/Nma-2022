// importar App //----------------------------------------------------------------
import app from './app'
// importar Conexion bd //---------------------------------------------------------------
import  './database/connection'
// importar puerto //---------------------------------------------------------------
app.listen(app.get('port'))

console.log('server on port', app.get('port'))