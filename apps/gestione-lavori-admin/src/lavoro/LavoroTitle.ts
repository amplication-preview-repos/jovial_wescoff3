import { Lavoro as TLavoro } from "../api/lavoro/Lavoro";

export const LAVORO_TITLE_FIELD = "titolo";

export const LavoroTitle = (record: TLavoro): string => {
  return record.titolo?.toString() || String(record.id);
};
