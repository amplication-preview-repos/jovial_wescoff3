import { Operatore25 as TOperatore25 } from "../api/operatore25/Operatore25";

export const OPERATORE25_TITLE_FIELD = "password";

export const Operatore25Title = (record: TOperatore25): string => {
  return record.password?.toString() || String(record.id);
};
