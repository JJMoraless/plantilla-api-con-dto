import mysql from "mysql2/promise";
import "dotenv/config";


const { DB_USER, DB_PASSWORD, PORT, DB } = process.env;



export const getConnection = async () => {
  try {
    console.log("******** conexion exitosa 👽 *******");
    return mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "db_campus_bliblioteca",
    });
  } catch (error) {
    console.log({error});
    console.log("*********** conexion fallida 💀 *********");
    return error.message;
  }
};

const db = await getConnection();
export default db;