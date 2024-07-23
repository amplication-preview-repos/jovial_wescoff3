import { Operatore15 as TOperatore15 } from "../api/operatore15/Operatore15";

export const OPERATORE15_TITLE_FIELD = "password";

export const Operatore15Title = (record: TOperatore15): string => {
  return record.password?.toString() || String(record.id);
};
