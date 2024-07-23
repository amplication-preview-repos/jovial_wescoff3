import { LavoroCreateNestedManyWithoutClientesInput } from "./LavoroCreateNestedManyWithoutClientesInput";

export type ClienteCreateInput = {
  nome?: string | null;
  email?: string | null;
  telefono?: string | null;
  lavoros?: LavoroCreateNestedManyWithoutClientesInput;
};
