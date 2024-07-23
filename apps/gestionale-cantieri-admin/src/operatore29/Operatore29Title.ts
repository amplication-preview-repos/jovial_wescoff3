import { Operatore29 as TOperatore29 } from "../api/operatore29/Operatore29";

export const OPERATORE29_TITLE_FIELD = "password";

export const Operatore29Title = (record: TOperatore29): string => {
  return record.password?.toString() || String(record.id);
};
