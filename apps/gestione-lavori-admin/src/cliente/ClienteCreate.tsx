import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LavoroTitle } from "../lavoro/LavoroTitle";

export const ClienteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="nome" source="nome" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="telefono" source="telefono" />
        <ReferenceArrayInput
          source="lavoros"
          reference="Lavoro"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LavoroTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
