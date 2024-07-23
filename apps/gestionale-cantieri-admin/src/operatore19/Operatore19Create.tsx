import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const Operatore19Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Create>
  );
};