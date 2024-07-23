import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type Operatore4WhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  permessiSpeciali?: BooleanNullableFilter;
};
