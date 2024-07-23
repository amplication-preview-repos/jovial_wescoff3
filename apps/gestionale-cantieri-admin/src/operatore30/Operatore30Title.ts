import { Operatore30 as TOperatore30 } from "../api/operatore30/Operatore30";

export const OPERATORE30_TITLE_FIELD = "password";

export const Operatore30Title = (record: TOperatore30): string => {
  return record.password?.toString() || String(record.id);
};
