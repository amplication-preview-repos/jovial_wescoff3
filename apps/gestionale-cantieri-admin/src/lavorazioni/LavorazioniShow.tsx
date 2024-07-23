import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { OPERATORE_TITLE_FIELD } from "../operatore/OperatoreTitle";

export const LavorazioniShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
