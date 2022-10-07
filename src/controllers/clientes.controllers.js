import { getConnection } from '../database/connection'

export const getClientes = async (req, res) => {

    const pool = await getConnection();
    const result = await pool.request().query( "Select * From Vista_Clientes ");
     res.json(result.recordset);
}  
