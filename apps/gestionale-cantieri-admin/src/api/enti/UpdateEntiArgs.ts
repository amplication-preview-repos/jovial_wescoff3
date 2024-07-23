import { EntiWhereUniqueInput } from "./EntiWhereUniqueInput";
import { EntiUpdateInput } from "./EntiUpdateInput";

export type UpdateEntiArgs = {
  where: EntiWhereUniqueInput;
  data: EntiUpdateInput;
};
