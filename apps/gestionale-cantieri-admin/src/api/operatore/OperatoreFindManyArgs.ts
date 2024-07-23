import { OperatoreWhereInput } from "./OperatoreWhereInput";
import { OperatoreOrderByInput } from "./OperatoreOrderByInput";

export type OperatoreFindManyArgs = {
  where?: OperatoreWhereInput;
  orderBy?: Array<OperatoreOrderByInput>;
  skip?: number;
  take?: number;
};
