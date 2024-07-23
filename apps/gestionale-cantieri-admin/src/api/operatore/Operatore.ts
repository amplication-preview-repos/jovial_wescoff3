import { Lavorazioni } from "../lavorazioni/Lavorazioni";

export type Operatore = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nome: string | null;
  cognome: string | null;
  email: string | null;
  password: string | null;
  lavorazionis?: Array<Lavorazioni>;
  permessiSpeciali: boolean | null;
};
