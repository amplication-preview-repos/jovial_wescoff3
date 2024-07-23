import { LavoroWhereInput } from "./LavoroWhereInput";
import { LavoroOrderByInput } from "./LavoroOrderByInput";

export type LavoroFindManyArgs = {
  where?: LavoroWhereInput;
  orderBy?: Array<LavoroOrderByInput>;
  skip?: number;
  take?: number;
};
