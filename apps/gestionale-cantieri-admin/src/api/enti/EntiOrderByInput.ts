import { SortOrder } from "../../util/SortOrder";

export type EntiOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tipo?: SortOrder;
  nome?: SortOrder;
  descrizione?: SortOrder;
  cantiere?: SortOrder;
};
