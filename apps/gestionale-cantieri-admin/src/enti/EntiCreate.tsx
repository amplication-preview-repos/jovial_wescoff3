import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EntiCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Tipo" source="tipo" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Descrizione" multiline source="descrizione" />
        <TextInput label="Cantiere" source="cantiere" />
      </SimpleForm>
    </Create>
  );
};
