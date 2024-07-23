import { Operatore19 as TOperatore19 } from "../api/operatore19/Operatore19";

export const OPERATORE19_TITLE_FIELD = "password";

export const Operatore19Title = (record: TOperatore19): string => {
  return record.password?.toString() || String(record.id);
};
