import { Operatore22 as TOperatore22 } from "../api/operatore22/Operatore22";

export const OPERATORE22_TITLE_FIELD = "password";

export const Operatore22Title = (record: TOperatore22): string => {
  return record.password?.toString() || String(record.id);
};
