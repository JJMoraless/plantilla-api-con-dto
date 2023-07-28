import { qSelectAll } from "../utils/consultas.js"


export const getAutores = async (req, res) => {
    try {
        const autoresFound = await qSelectAll({columns: 'nombre, nacionalidad', table: 'autor'})
        res.status(200).json({autores: autoresFound})
    } catch (error) {
        res.status(500).json({error})
    }
} 