import { EntiWhereInput } from "./EntiWhereInput";
import { EntiOrderByInput } from "./EntiOrderByInput";

export type EntiFindManyArgs = {
  where?: EntiWhereInput;
  orderBy?: Array<EntiOrderByInput>;
  skip?: number;
  take?: number;
};
