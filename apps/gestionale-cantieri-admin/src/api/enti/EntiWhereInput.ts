import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EntiWhereInput = {
  id?: StringFilter;
  tipo?: StringNullableFilter;
  nome?: StringNullableFilter;
  descrizione?: StringNullableFilter;
  cantiere?: StringNullableFilter;
};
