import { Operatore24 as TOperatore24 } from "../api/operatore24/Operatore24";

export const OPERATORE24_TITLE_FIELD = "password";

export const Operatore24Title = (record: TOperatore24): string => {
  return record.password?.toString() || String(record.id);
};
