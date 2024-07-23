import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const OperatoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Operatores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Nome" source="nome" />
        <TextField label="Cognome" source="cognome" />
        <TextField label="Email" source="email" />
        <TextField label="Password" source="password" />
        <BooleanField label="permessiSpeciali" source="permessiSpeciali" />
      </Datagrid>
    </List>
  );
};
