import { Operatore5 as TOperatore5 } from "../api/operatore5/Operatore5";

export const OPERATORE5_TITLE_FIELD = "password";

export const Operatore5Title = (record: TOperatore5): string => {
  return record.password?.toString() || String(record.id);
};
