import { Lavorazioni as TLavorazioni } from "../api/lavorazioni/Lavorazioni";

export const LAVORAZIONI_TITLE_FIELD = "nome";

export const LavorazioniTitle = (record: TLavorazioni): string => {
  return record.nome?.toString() || String(record.id);
};
