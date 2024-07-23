import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLIENTE_TITLE_FIELD } from "./ClienteTitle";

export const ClienteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="nome" source="nome" />
        <TextField label="email" source="email" />
        <TextField label="telefono" source="telefono" />
        <ReferenceManyField
          reference="Lavoro"
          target="clienteId"
          label="Lavoros"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="titolo" source="titolo" />
            <TextField label="descrizione" source="descrizione" />
            <TextField label="dataInizio" source="dataInizio" />
            <TextField label="dataFine" source="dataFine" />
            <ReferenceField
              label="Cliente"
              source="cliente.id"
              reference="Cliente"
            >
              <TextField source={CLIENTE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
