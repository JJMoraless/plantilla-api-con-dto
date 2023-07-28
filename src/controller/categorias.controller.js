import { qSelectAll } from "../utils/consultas.js"


export const getCategorias = async (req, res) => {
    try {
        const categorias = await qSelectAll({table: 'categoria'})
        res.status(200).json({categorias: categorias})
    } catch (error) {
        res.status(500).json({error})
    }
} 