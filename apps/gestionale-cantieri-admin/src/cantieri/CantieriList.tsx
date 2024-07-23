import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CantieriList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cantieris"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Nome" source="nome" />
        <TextField label="Descrizione" source="descrizione" />
        <TextField label="Immagine" source="immagine" />
        <TextField label="Documenti" source="documenti" />
      </Datagrid>
    </List>
  );
};
