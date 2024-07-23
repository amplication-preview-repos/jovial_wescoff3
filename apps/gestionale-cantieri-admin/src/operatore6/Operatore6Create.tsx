import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const Operatore6Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="password" source="password" />
        <BooleanInput label="permessiSpeciali" source="permessiSpeciali" />
      </SimpleForm>
    </Create>
  );
};
