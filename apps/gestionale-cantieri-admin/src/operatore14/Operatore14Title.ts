import { Operatore14 as TOperatore14 } from "../api/operatore14/Operatore14";

export const OPERATORE14_TITLE_FIELD = "password";

export const Operatore14Title = (record: TOperatore14): string => {
  return record.password?.toString() || String(record.id);
};
