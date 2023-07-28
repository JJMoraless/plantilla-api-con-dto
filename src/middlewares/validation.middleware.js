import { validate } from "class-validator";
import "reflect-metadata";
import { plainToClass } from "class-transformer";

const validateDto = (dto) => async (req, res, next) => {
  try {
    let data = plainToClass(dto, req.body, { excludeExtraneousValues: true });
    req.body = data;
    await validate(data);
    next();
  } catch (err) {
    res
      .status(err.status)
      .send(
        `<img style="text-aling='center'" title="${err.message}" src="https://http.cat/${err.status}" />`
      );
  }
};

export default validateDto;
