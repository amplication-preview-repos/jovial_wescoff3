import { Cantieri as TCantieri } from "../api/cantieri/Cantieri";

export const CANTIERI_TITLE_FIELD = "nome";

export const CantieriTitle = (record: TCantieri): string => {
  return record.nome?.toString() || String(record.id);
};
