import { SortOrder } from "../../util/SortOrder";

export type LavoroOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  titolo?: SortOrder;
  descrizione?: SortOrder;
  dataInizio?: SortOrder;
  dataFine?: SortOrder;
  clienteId?: SortOrder;
};
