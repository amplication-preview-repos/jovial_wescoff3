import { LavoroUpdateManyWithoutClientesInput } from "./LavoroUpdateManyWithoutClientesInput";

export type ClienteUpdateInput = {
  nome?: string | null;
  email?: string | null;
  telefono?: string | null;
  lavoros?: LavoroUpdateManyWithoutClientesInput;
};
