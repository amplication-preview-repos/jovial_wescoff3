import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LavorazioniListRelationFilter } from "../lavorazioni/LavorazioniListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type OperatoreWhereInput = {
  id?: StringFilter;
  nome?: StringNullableFilter;
  cognome?: StringNullableFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  lavorazionis?: LavorazioniListRelationFilter;
  permessiSpeciali?: BooleanNullableFilter;
};
