import { Operatore28 as TOperatore28 } from "../api/operatore28/Operatore28";

export const OPERATORE28_TITLE_FIELD = "password";

export const Operatore28Title = (record: TOperatore28): string => {
  return record.password?.toString() || String(record.id);
};
