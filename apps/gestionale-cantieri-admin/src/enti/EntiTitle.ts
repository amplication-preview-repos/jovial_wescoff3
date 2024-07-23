import { Enti as TEnti } from "../api/enti/Enti";

export const ENTI_TITLE_FIELD = "tipo";

export const EntiTitle = (record: TEnti): string => {
  return record.tipo?.toString() || String(record.id);
};
