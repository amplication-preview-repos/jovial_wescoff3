import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OperatoreWhereUniqueInput } from "../operatore/OperatoreWhereUniqueInput";

export type LavorazioniWhereInput = {
  id?: StringFilter;
  descrizione?: StringNullableFilter;
  dataInizio?: DateTimeNullableFilter;
  dataFine?: DateTimeNullableFilter;
  nome?: StringNullableFilter;
  ente?: StringNullableFilter;
  operatore?: OperatoreWhereUniqueInput;
};
