import { SortOrder } from "../../util/SortOrder";

export type CantieriOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nome?: SortOrder;
  descrizione?: SortOrder;
  immagine?: SortOrder;
  documenti?: SortOrder;
};
