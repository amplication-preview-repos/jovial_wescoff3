import { Operatore10 as TOperatore10 } from "../api/operatore10/Operatore10";

export const OPERATORE10_TITLE_FIELD = "password";

export const Operatore10Title = (record: TOperatore10): string => {
  return record.password?.toString() || String(record.id);
};
