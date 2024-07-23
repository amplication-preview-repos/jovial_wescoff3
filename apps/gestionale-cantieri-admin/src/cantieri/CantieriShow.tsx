import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CantieriShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Nome" source="nome" />
        <TextField label="Descrizione" source="descrizione" />
        <TextField label="Immagine" source="immagine" />
        <TextField label="Documenti" source="documenti" />
      </SimpleShowLayout>
    </Show>
  );
};
