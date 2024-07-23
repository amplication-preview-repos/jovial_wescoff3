import { SortOrder } from "../../util/SortOrder";

export type OperatoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nome?: SortOrder;
  cognome?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  permessiSpeciali?: SortOrder;
};
