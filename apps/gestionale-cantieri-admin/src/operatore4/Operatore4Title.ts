import { Operatore4 as TOperatore4 } from "../api/operatore4/Operatore4";

export const OPERATORE4_TITLE_FIELD = "password";

export const Operatore4Title = (record: TOperatore4): string => {
  return record.password?.toString() || String(record.id);
};
