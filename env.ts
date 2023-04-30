import { config as configENV } from "dotenv";
import { resolve } from "path";

const root = `${process.cwd()}/`;

switch (process.env.NODE_ENV) {
  case "development":
    configENV({
      path: resolve(root + ".env.development"),
    });
    break;

  case "production":
    configENV({
      path: resolve(root + ".env.production"),
    });
    break;

  case "test":
    configENV({
      path: resolve(root + ".env"),
    });

  default:
    throw new Error(`NODE_ENV: ${process.env.NODE_ENV}를 불러올 수 없습니다.`);
}
