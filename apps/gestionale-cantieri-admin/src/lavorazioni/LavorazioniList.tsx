import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OPERATORE_TITLE_FIELD } from "../operatore/OperatoreTitle";

export const LavorazioniList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Lavorazionis"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Descrizione" source="descrizione" />
        <TextField label="DataInizio" source="dataInizio" />
        <TextField label="DataFine" source="dataFine" />
        <TextField label="Nome" source="nome" />
        <TextField label="Ente" source="ente" />
        <ReferenceField
          label="Operatore"
          source="operatore.id"
          reference="Operatore"
        >
          <TextField source={OPERATORE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
