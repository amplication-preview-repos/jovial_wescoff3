import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { LavorazioniTitle } from "../lavorazioni/LavorazioniTitle";

export const OperatoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="nome" />
        <TextInput label="Cognome" source="cognome" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Password" source="password" />
        <ReferenceArrayInput
          source="lavorazionis"
          reference="Lavorazioni"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LavorazioniTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="permessiSpeciali" source="permessiSpeciali" />
      </SimpleForm>
    </Edit>
  );
};
