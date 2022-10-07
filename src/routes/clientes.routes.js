import { Router } from "express";
import { getClientes } from '../controllers/clientes.controllers'
const router = Router()

router.get('/clientesjson', getClientes)

export default router