import { LavorazioniCreateNestedManyWithoutOperatoresInput } from "./LavorazioniCreateNestedManyWithoutOperatoresInput";

export type OperatoreCreateInput = {
  nome?: string | null;
  cognome?: string | null;
  email?: string | null;
  password?: string | null;
  lavorazionis?: LavorazioniCreateNestedManyWithoutOperatoresInput;
  permessiSpeciali?: boolean | null;
};
