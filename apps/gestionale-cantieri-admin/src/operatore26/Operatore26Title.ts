import { Operatore26 as TOperatore26 } from "../api/operatore26/Operatore26";

export const OPERATORE26_TITLE_FIELD = "password";

export const Operatore26Title = (record: TOperatore26): string => {
  return record.password?.toString() || String(record.id);
};
