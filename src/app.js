// Dependencias y modulos// ----------------------------
import  express  from 'express'
import config from './config';
// Routes // ------------------------------
import clientesRoutes from './routes/clientes.routes'
import verclientesRoutes from './routes/verclientes.routes'
import versolicitudesRoutes from './routes/versolicitudes.routes'
import verasesoriasRoutes from './routes/verasesorias.routes'
import revisarprofRoutes from './routes/revisarprof.routes'
import crearvisitaRoutes from './routes/crearvisita.routes'
import crearchecklistRoutes from './routes/crearchecklist.routes'
import crearcapacitacionRoutes from './routes/crearcapacitacion.routes'
import crearasesoriaRoutes from './routes/crearasesoria.routes'

// initializar // ------------------------------
const app = express();
//Definir ruta de las Views y renderizar // ---------------------------
app.set('views', 'C:/Dev/Nma2022/src/views')
app.set('view engine', 'ejs')
// settings // ------------------------------
let port;
app.set("port", config.port)
 // modulos en usos // ---------------------------
app.use(clientesRoutes)
app.use(verclientesRoutes)
app.use(versolicitudesRoutes)
app.use(verasesoriasRoutes)
app.use(revisarprofRoutes)
app.use(crearvisitaRoutes)
app.use(crearchecklistRoutes)
app.use(crearcapacitacionRoutes)
app.use(crearasesoriaRoutes)
// export // ------------------------------
export default app;