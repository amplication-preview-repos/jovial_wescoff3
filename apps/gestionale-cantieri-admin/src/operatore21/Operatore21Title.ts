import { Operatore21 as TOperatore21 } from "../api/operatore21/Operatore21";

export const OPERATORE21_TITLE_FIELD = "password";

export const Operatore21Title = (record: TOperatore21): string => {
  return record.password?.toString() || String(record.id);
};
