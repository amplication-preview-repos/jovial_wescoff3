import { Lavoro } from "../lavoro/Lavoro";

export type Cliente = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nome: string | null;
  email: string | null;
  telefono: string | null;
  lavoros?: Array<Lavoro>;
};
