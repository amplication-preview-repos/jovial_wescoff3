import { LavorazioniWhereInput } from "./LavorazioniWhereInput";
import { LavorazioniOrderByInput } from "./LavorazioniOrderByInput";

export type LavorazioniFindManyArgs = {
  where?: LavorazioniWhereInput;
  orderBy?: Array<LavorazioniOrderByInput>;
  skip?: number;
  take?: number;
};
