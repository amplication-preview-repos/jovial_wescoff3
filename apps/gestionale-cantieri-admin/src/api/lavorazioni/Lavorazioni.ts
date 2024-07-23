import { Operatore } from "../operatore/Operatore";

export type Lavorazioni = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  descrizione: string | null;
  dataInizio: Date | null;
  dataFine: Date | null;
  nome: string | null;
  ente: string | null;
  operatore?: Operatore | null;
};
