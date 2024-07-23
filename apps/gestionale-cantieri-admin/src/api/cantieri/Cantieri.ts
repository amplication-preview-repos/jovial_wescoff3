import { JsonValue } from "type-fest";

export type Cantieri = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nome: string | null;
  descrizione: string | null;
  immagine: JsonValue;
  documenti: JsonValue;
};
