import { Operatore12 as TOperatore12 } from "../api/operatore12/Operatore12";

export const OPERATORE12_TITLE_FIELD = "password";

export const Operatore12Title = (record: TOperatore12): string => {
  return record.password?.toString() || String(record.id);
};
