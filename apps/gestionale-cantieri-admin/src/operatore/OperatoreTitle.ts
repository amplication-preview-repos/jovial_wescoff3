import { Operatore as TOperatore } from "../api/operatore/Operatore";

export const OPERATORE_TITLE_FIELD = "nome";

export const OperatoreTitle = (record: TOperatore): string => {
  return record.nome?.toString() || String(record.id);
};
