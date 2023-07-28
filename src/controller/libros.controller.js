import db from "../config/connection.js";

export const getLibrosCategoryAutor = async (req, res) => {
  try {
    const q = `
        SELECT
            l.titulo,
            a.nombre AS 'autor',
            e.nombre AS 'editorial'
        FROM
            libro AS l
        INNER JOIN
            autor AS a ON l.id_autor = a.id_autor
        INNER JOIN
            editorial AS e ON l.id_editorial = e.id_editorial
    `;
    const [categorias] = await db.query(q);
    res.status(200).json({ categorias: categorias });
  } catch (error) {
    res.status(500).json({ error });
  }
};
