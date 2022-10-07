import { response, Router } from "express";
import axios from "axios";
const router = Router()

router.get('/verclientes', async (req, res) => {
  
  const  response = await axios.get(
    "http://localhost:4000/clientesjson"
    );
  res.render('P-clientes', {
    clientes: response.data,
    

})
});


export default router
