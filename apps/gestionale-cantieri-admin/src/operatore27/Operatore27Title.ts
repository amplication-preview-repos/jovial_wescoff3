import { Operatore27 as TOperatore27 } from "../api/operatore27/Operatore27";

export const OPERATORE27_TITLE_FIELD = "password";

export const Operatore27Title = (record: TOperatore27): string => {
  return record.password?.toString() || String(record.id);
};
