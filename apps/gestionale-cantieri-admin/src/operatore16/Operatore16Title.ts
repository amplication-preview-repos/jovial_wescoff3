import { Operatore16 as TOperatore16 } from "../api/operatore16/Operatore16";

export const OPERATORE16_TITLE_FIELD = "password";

export const Operatore16Title = (record: TOperatore16): string => {
  return record.password?.toString() || String(record.id);
};
