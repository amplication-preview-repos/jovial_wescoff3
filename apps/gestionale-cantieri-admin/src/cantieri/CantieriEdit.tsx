import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CantieriEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="nome" />
        <TextInput label="Descrizione" multiline source="descrizione" />
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};
