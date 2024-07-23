import { InputJsonValue } from "../../types";

export type CantieriUpdateInput = {
  nome?: string | null;
  descrizione?: string | null;
  immagine?: InputJsonValue;
  documenti?: InputJsonValue;
};
