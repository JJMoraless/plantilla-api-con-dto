import db from "../config/connection.js";

export const qSelectAll = async ({ columns, table }) => {
  const query = `SELECT ${columns || "*"} FROM ${table}`;
  const [data] = await db.query(query)
  return data;
};

export const qSelectW = async ({ columns, table, where }) => {
  const query = `SELECT ${columns || "*"} FROM ${table} WHERE ${where}`;
  const [data] = await db.query(query);
  return data;
};

export const qDelete = async ({ table, where }) => {
  const query = `DELETE FROM ${table} WHERE ${where};`;
  const [{ affectedRows }] = await db.query(query);
  return { msg: "delete exitoso", affectedRows };
};

export const qInsert = async ({ table, entity }) => {
  const query = `INSERT INTO  ${table} SET ?;`;
  const [{ insertId }] = await db.query(query, entity);
  return { msg: "post exitoso", insertId };
};

export const qUdate = async ({ table, entity, where }) => {
  const query = `UPDATE  ${table} SET ? WHERE ${where}`;
  const [{ info }] = await db.query(query, entity);
  return { msg: "put exitoso", info };
};

export const selectOneToMany = async ({
  tHasMany,
  tBelongsTo,
  fk,
  where
}) => {
  let ones = []
  if(!where){
    ones  = await qSelectAll({ table: tHasMany });
  } else {
    ones = await qSelectW({ table: tHasMany, where });
  }
  const manys = await qSelectAll({ table: tBelongsTo });
  
  const onesToMany = ones.map((one) => {
    one[tBelongsTo] = [];
    manys.forEach((many) => {
      if (many[fk] === one.id) {
        delete many[fk];
        one[tBelongsTo].push(many);
      }
    });
    return one;
  });
  return onesToMany;
};

// export const qSelectInner = async ({ columns, table1, table2 }) => {
//   const query = `
//         SELECT ${columns} FROM ${table1}
//         WHERE
//     `;
// };