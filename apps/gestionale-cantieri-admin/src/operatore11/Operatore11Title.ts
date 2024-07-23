import { Operatore11 as TOperatore11 } from "../api/operatore11/Operatore11";

export const OPERATORE11_TITLE_FIELD = "password";

export const Operatore11Title = (record: TOperatore11): string => {
  return record.password?.toString() || String(record.id);
};
