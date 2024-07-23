import { Operatore2 as TOperatore2 } from "../api/operatore2/Operatore2";

export const OPERATORE2_TITLE_FIELD = "password";

export const Operatore2Title = (record: TOperatore2): string => {
  return record.password?.toString() || String(record.id);
};
