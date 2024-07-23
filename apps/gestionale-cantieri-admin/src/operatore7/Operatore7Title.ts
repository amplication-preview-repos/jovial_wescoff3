import { Operatore7 as TOperatore7 } from "../api/operatore7/Operatore7";

export const OPERATORE7_TITLE_FIELD = "password";

export const Operatore7Title = (record: TOperatore7): string => {
  return record.password?.toString() || String(record.id);
};
