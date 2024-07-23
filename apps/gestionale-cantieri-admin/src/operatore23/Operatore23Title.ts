import { Operatore23 as TOperatore23 } from "../api/operatore23/Operatore23";

export const OPERATORE23_TITLE_FIELD = "password";

export const Operatore23Title = (record: TOperatore23): string => {
  return record.password?.toString() || String(record.id);
};
