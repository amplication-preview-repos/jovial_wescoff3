import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LavoroTitle } from "../lavoro/LavoroTitle";

export const ClienteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
