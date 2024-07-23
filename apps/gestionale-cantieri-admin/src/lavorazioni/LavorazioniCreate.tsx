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

import { OperatoreTitle } from "../operatore/OperatoreTitle";

export const LavorazioniCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Descrizione" multiline source="descrizione" />
        <DateTimeInput label="DataInizio" source="dataInizio" />
        <DateTimeInput label="DataFine" source="dataFine" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Ente" source="ente" />
        <ReferenceInput
          source="operatore.id"
          reference="Operatore"
          label="Operatore"
        >
          <SelectInput optionText={OperatoreTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
