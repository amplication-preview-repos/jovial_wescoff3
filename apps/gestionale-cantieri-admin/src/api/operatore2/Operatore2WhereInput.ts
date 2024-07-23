import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type Operatore2WhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  permessiSpeciali?: BooleanNullableFilter;
};
