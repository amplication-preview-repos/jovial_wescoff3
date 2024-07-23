import { SortOrder } from "../../util/SortOrder";

export type LavorazioniOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  descrizione?: SortOrder;
  dataInizio?: SortOrder;
  dataFine?: SortOrder;
  nome?: SortOrder;
  ente?: SortOrder;
  operatoreId?: SortOrder;
};
