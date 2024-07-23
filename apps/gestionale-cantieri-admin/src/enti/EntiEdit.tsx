import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EntiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Tipo" source="tipo" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Descrizione" multiline source="descrizione" />
        <TextInput label="Cantiere" source="cantiere" />
      </SimpleForm>
    </Edit>
  );
};
