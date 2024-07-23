import { Operatore6 as TOperatore6 } from "../api/operatore6/Operatore6";

export const OPERATORE6_TITLE_FIELD = "password";

export const Operatore6Title = (record: TOperatore6): string => {
  return record.password?.toString() || String(record.id);
};
