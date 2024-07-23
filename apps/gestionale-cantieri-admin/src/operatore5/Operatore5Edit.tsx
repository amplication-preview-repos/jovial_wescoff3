import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const Operatore5Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="password" source="password" />
        <BooleanInput label="permessiSpeciali" source="permessiSpeciali" />
      </SimpleForm>
    </Edit>
  );
};
