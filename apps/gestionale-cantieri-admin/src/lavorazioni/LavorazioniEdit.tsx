import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OperatoreTitle } from "../operatore/OperatoreTitle";

export const LavorazioniEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
