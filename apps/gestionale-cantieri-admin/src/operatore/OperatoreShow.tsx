import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { OPERATORE_TITLE_FIELD } from "./OperatoreTitle";

export const OperatoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Nome" source="nome" />
        <TextField label="Cognome" source="cognome" />
        <TextField label="Email" source="email" />
        <TextField label="Password" source="password" />
        <BooleanField label="permessiSpeciali" source="permessiSpeciali" />
        <ReferenceManyField
          reference="Lavorazioni"
          target="operatoreId"
          label="Lavorazionis"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
