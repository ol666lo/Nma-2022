import sql from 'mssql';

const dbSettings = {
    user: 'sa',
    password: 'admin159',
    server: "localhost",
    database: 'BD_P_Nma',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
      }
}
