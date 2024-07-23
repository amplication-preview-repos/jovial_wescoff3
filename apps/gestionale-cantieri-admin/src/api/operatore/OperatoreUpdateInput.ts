import { LavorazioniUpdateManyWithoutOperatoresInput } from "./LavorazioniUpdateManyWithoutOperatoresInput";

export type OperatoreUpdateInput = {
  nome?: string | null;
  cognome?: string | null;
  email?: string | null;
  password?: string | null;
  lavorazionis?: LavorazioniUpdateManyWithoutOperatoresInput;
  permessiSpeciali?: boolean | null;
};
