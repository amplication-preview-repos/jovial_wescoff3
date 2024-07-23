import { Cliente } from "../cliente/Cliente";

export type Lavoro = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  titolo: string | null;
  descrizione: string | null;
  dataInizio: Date | null;
  dataFine: Date | null;
  cliente?: Cliente | null;
};
