import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ClienteTitle } from "../cliente/ClienteTitle";

export const LavoroCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="titolo" source="titolo" />
        <TextInput label="descrizione" multiline source="descrizione" />
        <DateTimeInput label="dataInizio" source="dataInizio" />
        <DateTimeInput label="dataFine" source="dataFine" />
        <ReferenceInput source="cliente.id" reference="Cliente" label="Cliente">
          <SelectInput optionText={ClienteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
