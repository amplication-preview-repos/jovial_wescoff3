import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CLIENTE_TITLE_FIELD } from "../cliente/ClienteTitle";

export const LavoroShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="titolo" source="titolo" />
        <TextField label="descrizione" source="descrizione" />
        <TextField label="dataInizio" source="dataInizio" />
        <TextField label="dataFine" source="dataFine" />
        <ReferenceField label="Cliente" source="cliente.id" reference="Cliente">
          <TextField source={CLIENTE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
