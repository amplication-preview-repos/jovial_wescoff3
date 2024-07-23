import { InputJsonValue } from "../../types";

export type CantieriCreateInput = {
  nome?: string | null;
  descrizione?: string | null;
  immagine?: InputJsonValue;
  documenti?: InputJsonValue;
};
