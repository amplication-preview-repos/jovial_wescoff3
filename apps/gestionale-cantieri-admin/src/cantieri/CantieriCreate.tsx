import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CantieriCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="nome" />
        <TextInput label="Descrizione" multiline source="descrizione" />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
