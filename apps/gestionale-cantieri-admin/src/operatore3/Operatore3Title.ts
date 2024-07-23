import { Operatore3 as TOperatore3 } from "../api/operatore3/Operatore3";

export const OPERATORE3_TITLE_FIELD = "password";

export const Operatore3Title = (record: TOperatore3): string => {
  return record.password?.toString() || String(record.id);
};
