import { Operatore13 as TOperatore13 } from "../api/operatore13/Operatore13";

export const OPERATORE13_TITLE_FIELD = "password";

export const Operatore13Title = (record: TOperatore13): string => {
  return record.password?.toString() || String(record.id);
};
