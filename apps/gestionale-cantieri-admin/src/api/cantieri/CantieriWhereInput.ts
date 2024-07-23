import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CantieriWhereInput = {
  id?: StringFilter;
  nome?: StringNullableFilter;
  descrizione?: StringNullableFilter;
  immagine?: JsonFilter;
  documenti?: JsonFilter;
};
