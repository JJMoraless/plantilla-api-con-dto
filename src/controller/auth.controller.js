import { comparePass, encrypt } from "../utils/bcript.js";
import { qInsert, qSelectW } from "../utils/consultas.js";
import { createToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  try {
    const { pass, ...user } = req.body;
    const dataUser = {
      ...user,
      pass: await encrypt(pass),
    };
    const userRegistered = await qInsert({ table: "users", entity: dataUser });
    res.status(200).json(userRegistered);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const login = async (req, res) => {
  try {
    // const { email, pass } = req.body;
    
    // const [user] = await qSelectW({
    //   table: "users",
    //   where: `email = '${email}'`,
    // });
    
    // const isOk = await comparePass(pass, user.pass);
    // if(!isOk) return res.status(200).json({ message: "token no valido" });
    const token = await createToken(user.id);

    res.cookie("token", token);
    res.status(200).json({ message: "autenticado correctamete", token });
  } catch (error) {
    console.log("paso por aca");
    res.status(404).json(error);
  }
};

export const logOut = (req, res)=> {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  res.status(200).json({msg: "sesión cerrada"});
}