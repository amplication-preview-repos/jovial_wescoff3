import { ClienteWhereUniqueInput } from "../cliente/ClienteWhereUniqueInput";

export type LavoroCreateInput = {
  titolo?: string | null;
  descrizione?: string | null;
  dataInizio?: Date | null;
  dataFine?: Date | null;
  cliente?: ClienteWhereUniqueInput | null;
};
