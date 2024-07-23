import { SortOrder } from "../../util/SortOrder";

export type ClienteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nome?: SortOrder;
  email?: SortOrder;
  telefono?: SortOrder;
};
