import { Operatore9 as TOperatore9 } from "../api/operatore9/Operatore9";

export const OPERATORE9_TITLE_FIELD = "password";

export const Operatore9Title = (record: TOperatore9): string => {
  return record.password?.toString() || String(record.id);
};
