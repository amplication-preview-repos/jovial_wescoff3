import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type Operatore10WhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  permessiSpeciali?: BooleanNullableFilter;
};
