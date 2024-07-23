import { Operatore8 as TOperatore8 } from "../api/operatore8/Operatore8";

export const OPERATORE8_TITLE_FIELD = "password";

export const Operatore8Title = (record: TOperatore8): string => {
  return record.password?.toString() || String(record.id);
};
