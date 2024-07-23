import { OperatoreWhereUniqueInput } from "../operatore/OperatoreWhereUniqueInput";

export type LavorazioniUpdateInput = {
  descrizione?: string | null;
  dataInizio?: Date | null;
  dataFine?: Date | null;
  nome?: string | null;
  ente?: string | null;
  operatore?: OperatoreWhereUniqueInput | null;
};
