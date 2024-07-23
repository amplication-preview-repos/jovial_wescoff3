import { Operatore20 as TOperatore20 } from "../api/operatore20/Operatore20";

export const OPERATORE20_TITLE_FIELD = "password";

export const Operatore20Title = (record: TOperatore20): string => {
  return record.password?.toString() || String(record.id);
};
