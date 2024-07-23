import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClienteWhereUniqueInput } from "../cliente/ClienteWhereUniqueInput";

export type LavoroWhereInput = {
  id?: StringFilter;
  titolo?: StringNullableFilter;
  descrizione?: StringNullableFilter;
  dataInizio?: DateTimeNullableFilter;
  dataFine?: DateTimeNullableFilter;
  cliente?: ClienteWhereUniqueInput;
};
