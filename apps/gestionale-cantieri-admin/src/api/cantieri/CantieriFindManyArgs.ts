import { CantieriWhereInput } from "./CantieriWhereInput";
import { CantieriOrderByInput } from "./CantieriOrderByInput";

export type CantieriFindManyArgs = {
  where?: CantieriWhereInput;
  orderBy?: Array<CantieriOrderByInput>;
  skip?: number;
  take?: number;
};
