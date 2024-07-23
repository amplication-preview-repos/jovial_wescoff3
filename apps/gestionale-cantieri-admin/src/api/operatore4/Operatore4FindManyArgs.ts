import { Operatore4WhereInput } from "./Operatore4WhereInput";
import { Operatore4OrderByInput } from "./Operatore4OrderByInput";

export type Operatore4FindManyArgs = {
  where?: Operatore4WhereInput;
  orderBy?: Array<Operatore4OrderByInput>;
  skip?: number;
  take?: number;
};
