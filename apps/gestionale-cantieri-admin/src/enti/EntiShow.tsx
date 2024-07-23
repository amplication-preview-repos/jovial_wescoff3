import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EntiShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Tipo" source="tipo" />
        <TextField label="Nome" source="nome" />
        <TextField label="Descrizione" source="descrizione" />
        <TextField label="Cantiere" source="cantiere" />
      </SimpleShowLayout>
    </Show>
  );
};
