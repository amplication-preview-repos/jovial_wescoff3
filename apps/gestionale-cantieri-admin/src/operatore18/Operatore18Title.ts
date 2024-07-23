import { Operatore18 as TOperatore18 } from "../api/operatore18/Operatore18";

export const OPERATORE18_TITLE_FIELD = "password";

export const Operatore18Title = (record: TOperatore18): string => {
  return record.password?.toString() || String(record.id);
};
