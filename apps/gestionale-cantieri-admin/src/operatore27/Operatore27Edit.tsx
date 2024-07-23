import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const Operatore27Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
