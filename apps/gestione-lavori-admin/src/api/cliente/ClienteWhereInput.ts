import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LavoroListRelationFilter } from "../lavoro/LavoroListRelationFilter";

export type ClienteWhereInput = {
  id?: StringFilter;
  nome?: StringNullableFilter;
  email?: StringNullableFilter;
  telefono?: StringNullableFilter;
  lavoros?: LavoroListRelationFilter;
};
