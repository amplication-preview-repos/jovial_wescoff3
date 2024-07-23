import { Operatore1 as TOperatore1 } from "../api/operatore1/Operatore1";

export const OPERATORE1_TITLE_FIELD = "password";

export const Operatore1Title = (record: TOperatore1): string => {
  return record.password?.toString() || String(record.id);
};
