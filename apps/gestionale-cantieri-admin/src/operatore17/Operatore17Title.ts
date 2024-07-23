import { Operatore17 as TOperatore17 } from "../api/operatore17/Operatore17";

export const OPERATORE17_TITLE_FIELD = "password";

export const Operatore17Title = (record: TOperatore17): string => {
  return record.password?.toString() || String(record.id);
};
