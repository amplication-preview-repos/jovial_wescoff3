import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CantieriList } from "./cantieri/CantieriList";
import { CantieriCreate } from "./cantieri/CantieriCreate";
import { CantieriEdit } from "./cantieri/CantieriEdit";
import { CantieriShow } from "./cantieri/CantieriShow";
import { LavorazioniList } from "./lavorazioni/LavorazioniList";
import { LavorazioniCreate } from "./lavorazioni/LavorazioniCreate";
import { LavorazioniEdit } from "./lavorazioni/LavorazioniEdit";
import { LavorazioniShow } from "./lavorazioni/LavorazioniShow";
import { OperatoreList } from "./operatore/OperatoreList";
import { OperatoreCreate } from "./operatore/OperatoreCreate";
import { OperatoreEdit } from "./operatore/OperatoreEdit";
import { OperatoreShow } from "./operatore/OperatoreShow";
import { EntiList } from "./enti/EntiList";
import { EntiCreate } from "./enti/EntiCreate";
import { EntiEdit } from "./enti/EntiEdit";
import { EntiShow } from "./enti/EntiShow";
import { Operatore2List } from "./operatore2/Operatore2List";
import { Operatore2Create } from "./operatore2/Operatore2Create";
import { Operatore2Edit } from "./operatore2/Operatore2Edit";
import { Operatore2Show } from "./operatore2/Operatore2Show";
import { Operatore1List } from "./operatore1/Operatore1List";
import { Operatore1Create } from "./operatore1/Operatore1Create";
import { Operatore1Edit } from "./operatore1/Operatore1Edit";
import { Operatore1Show } from "./operatore1/Operatore1Show";
import { Operatore4List } from "./operatore4/Operatore4List";
import { Operatore4Create } from "./operatore4/Operatore4Create";
import { Operatore4Edit } from "./operatore4/Operatore4Edit";
import { Operatore4Show } from "./operatore4/Operatore4Show";
import { Operatore3List } from "./operatore3/Operatore3List";
import { Operatore3Create } from "./operatore3/Operatore3Create";
import { Operatore3Edit } from "./operatore3/Operatore3Edit";
import { Operatore3Show } from "./operatore3/Operatore3Show";
import { Operatore20List } from "./operatore20/Operatore20List";
import { Operatore20Create } from "./operatore20/Operatore20Create";
import { Operatore20Edit } from "./operatore20/Operatore20Edit";
import { Operatore20Show } from "./operatore20/Operatore20Show";
import { Operatore19List } from "./operatore19/Operatore19List";
import { Operatore19Create } from "./operatore19/Operatore19Create";
import { Operatore19Edit } from "./operatore19/Operatore19Edit";
import { Operatore19Show } from "./operatore19/Operatore19Show";
import { Operatore26List } from "./operatore26/Operatore26List";
import { Operatore26Create } from "./operatore26/Operatore26Create";
import { Operatore26Edit } from "./operatore26/Operatore26Edit";
import { Operatore26Show } from "./operatore26/Operatore26Show";
import { Operatore30List } from "./operatore30/Operatore30List";
import { Operatore30Create } from "./operatore30/Operatore30Create";
import { Operatore30Edit } from "./operatore30/Operatore30Edit";
import { Operatore30Show } from "./operatore30/Operatore30Show";
import { Operatore27List } from "./operatore27/Operatore27List";
import { Operatore27Create } from "./operatore27/Operatore27Create";
import { Operatore27Edit } from "./operatore27/Operatore27Edit";
import { Operatore27Show } from "./operatore27/Operatore27Show";
import { Operatore22List } from "./operatore22/Operatore22List";
import { Operatore22Create } from "./operatore22/Operatore22Create";
import { Operatore22Edit } from "./operatore22/Operatore22Edit";
import { Operatore22Show } from "./operatore22/Operatore22Show";
import { Operatore23List } from "./operatore23/Operatore23List";
import { Operatore23Create } from "./operatore23/Operatore23Create";
import { Operatore23Edit } from "./operatore23/Operatore23Edit";
import { Operatore23Show } from "./operatore23/Operatore23Show";
import { Operatore5List } from "./operatore5/Operatore5List";
import { Operatore5Create } from "./operatore5/Operatore5Create";
import { Operatore5Edit } from "./operatore5/Operatore5Edit";
import { Operatore5Show } from "./operatore5/Operatore5Show";
import { Operatore29List } from "./operatore29/Operatore29List";
import { Operatore29Create } from "./operatore29/Operatore29Create";
import { Operatore29Edit } from "./operatore29/Operatore29Edit";
import { Operatore29Show } from "./operatore29/Operatore29Show";
import { Operatore28List } from "./operatore28/Operatore28List";
import { Operatore28Create } from "./operatore28/Operatore28Create";
import { Operatore28Edit } from "./operatore28/Operatore28Edit";
import { Operatore28Show } from "./operatore28/Operatore28Show";
import { Operatore6List } from "./operatore6/Operatore6List";
import { Operatore6Create } from "./operatore6/Operatore6Create";
import { Operatore6Edit } from "./operatore6/Operatore6Edit";
import { Operatore6Show } from "./operatore6/Operatore6Show";
import { Operatore21List } from "./operatore21/Operatore21List";
import { Operatore21Create } from "./operatore21/Operatore21Create";
import { Operatore21Edit } from "./operatore21/Operatore21Edit";
import { Operatore21Show } from "./operatore21/Operatore21Show";
import { Operatore15List } from "./operatore15/Operatore15List";
import { Operatore15Create } from "./operatore15/Operatore15Create";
import { Operatore15Edit } from "./operatore15/Operatore15Edit";
import { Operatore15Show } from "./operatore15/Operatore15Show";
import { Operatore25List } from "./operatore25/Operatore25List";
import { Operatore25Create } from "./operatore25/Operatore25Create";
import { Operatore25Edit } from "./operatore25/Operatore25Edit";
import { Operatore25Show } from "./operatore25/Operatore25Show";
import { Operatore24List } from "./operatore24/Operatore24List";
import { Operatore24Create } from "./operatore24/Operatore24Create";
import { Operatore24Edit } from "./operatore24/Operatore24Edit";
import { Operatore24Show } from "./operatore24/Operatore24Show";
import { Operatore18List } from "./operatore18/Operatore18List";
import { Operatore18Create } from "./operatore18/Operatore18Create";
import { Operatore18Edit } from "./operatore18/Operatore18Edit";
import { Operatore18Show } from "./operatore18/Operatore18Show";
import { Operatore16List } from "./operatore16/Operatore16List";
import { Operatore16Create } from "./operatore16/Operatore16Create";
import { Operatore16Edit } from "./operatore16/Operatore16Edit";
import { Operatore16Show } from "./operatore16/Operatore16Show";
import { Operatore13List } from "./operatore13/Operatore13List";
import { Operatore13Create } from "./operatore13/Operatore13Create";
import { Operatore13Edit } from "./operatore13/Operatore13Edit";
import { Operatore13Show } from "./operatore13/Operatore13Show";
import { Operatore9List } from "./operatore9/Operatore9List";
import { Operatore9Create } from "./operatore9/Operatore9Create";
import { Operatore9Edit } from "./operatore9/Operatore9Edit";
import { Operatore9Show } from "./operatore9/Operatore9Show";
import { Operatore7List } from "./operatore7/Operatore7List";
import { Operatore7Create } from "./operatore7/Operatore7Create";
import { Operatore7Edit } from "./operatore7/Operatore7Edit";
import { Operatore7Show } from "./operatore7/Operatore7Show";
import { Operatore10List } from "./operatore10/Operatore10List";
import { Operatore10Create } from "./operatore10/Operatore10Create";
import { Operatore10Edit } from "./operatore10/Operatore10Edit";
import { Operatore10Show } from "./operatore10/Operatore10Show";
import { Operatore8List } from "./operatore8/Operatore8List";
import { Operatore8Create } from "./operatore8/Operatore8Create";
import { Operatore8Edit } from "./operatore8/Operatore8Edit";
import { Operatore8Show } from "./operatore8/Operatore8Show";
import { Operatore14List } from "./operatore14/Operatore14List";
import { Operatore14Create } from "./operatore14/Operatore14Create";
import { Operatore14Edit } from "./operatore14/Operatore14Edit";
import { Operatore14Show } from "./operatore14/Operatore14Show";
import { Operatore12List } from "./operatore12/Operatore12List";
import { Operatore12Create } from "./operatore12/Operatore12Create";
import { Operatore12Edit } from "./operatore12/Operatore12Edit";
import { Operatore12Show } from "./operatore12/Operatore12Show";
import { Operatore17List } from "./operatore17/Operatore17List";
import { Operatore17Create } from "./operatore17/Operatore17Create";
import { Operatore17Edit } from "./operatore17/Operatore17Edit";
import { Operatore17Show } from "./operatore17/Operatore17Show";
import { Operatore11List } from "./operatore11/Operatore11List";
import { Operatore11Create } from "./operatore11/Operatore11Create";
import { Operatore11Edit } from "./operatore11/Operatore11Edit";
import { Operatore11Show } from "./operatore11/Operatore11Show";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GestionaleCantieri"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Cantieri"
          list={CantieriList}
          edit={CantieriEdit}
          create={CantieriCreate}
          show={CantieriShow}
        />
        <Resource
          name="Lavorazioni"
          list={LavorazioniList}
          edit={LavorazioniEdit}
          create={LavorazioniCreate}
          show={LavorazioniShow}
        />
        <Resource
          name="Operatore"
          list={OperatoreList}
          edit={OperatoreEdit}
          create={OperatoreCreate}
          show={OperatoreShow}
        />
        <Resource
          name="Enti"
          list={EntiList}
          edit={EntiEdit}
          create={EntiCreate}
          show={EntiShow}
        />
        <Resource
          name="Operatore2"
          list={Operatore2List}
          edit={Operatore2Edit}
          create={Operatore2Create}
          show={Operatore2Show}
        />
        <Resource
          name="Operatore1"
          list={Operatore1List}
          edit={Operatore1Edit}
          create={Operatore1Create}
          show={Operatore1Show}
        />
        <Resource
          name="Operatore4"
          list={Operatore4List}
          edit={Operatore4Edit}
          create={Operatore4Create}
          show={Operatore4Show}
        />
        <Resource
          name="Operatore3"
          list={Operatore3List}
          edit={Operatore3Edit}
          create={Operatore3Create}
          show={Operatore3Show}
        />
        <Resource
          name="Operatore20"
          list={Operatore20List}
          edit={Operatore20Edit}
          create={Operatore20Create}
          show={Operatore20Show}
        />
        <Resource
          name="Operatore19"
          list={Operatore19List}
          edit={Operatore19Edit}
          create={Operatore19Create}
          show={Operatore19Show}
        />
        <Resource
          name="Operatore26"
          list={Operatore26List}
          edit={Operatore26Edit}
          create={Operatore26Create}
          show={Operatore26Show}
        />
        <Resource
          name="Operatore30"
          list={Operatore30List}
          edit={Operatore30Edit}
          create={Operatore30Create}
          show={Operatore30Show}
        />
        <Resource
          name="Operatore27"
          list={Operatore27List}
          edit={Operatore27Edit}
          create={Operatore27Create}
          show={Operatore27Show}
        />
        <Resource
          name="Operatore22"
          list={Operatore22List}
          edit={Operatore22Edit}
          create={Operatore22Create}
          show={Operatore22Show}
        />
        <Resource
          name="Operatore23"
          list={Operatore23List}
          edit={Operatore23Edit}
          create={Operatore23Create}
          show={Operatore23Show}
        />
        <Resource
          name="Operatore5"
          list={Operatore5List}
          edit={Operatore5Edit}
          create={Operatore5Create}
          show={Operatore5Show}
        />
        <Resource
          name="Operatore29"
          list={Operatore29List}
          edit={Operatore29Edit}
          create={Operatore29Create}
          show={Operatore29Show}
        />
        <Resource
          name="Operatore28"
          list={Operatore28List}
          edit={Operatore28Edit}
          create={Operatore28Create}
          show={Operatore28Show}
        />
        <Resource
          name="Operatore6"
          list={Operatore6List}
          edit={Operatore6Edit}
          create={Operatore6Create}
          show={Operatore6Show}
        />
        <Resource
          name="Operatore21"
          list={Operatore21List}
          edit={Operatore21Edit}
          create={Operatore21Create}
          show={Operatore21Show}
        />
        <Resource
          name="Operatore15"
          list={Operatore15List}
          edit={Operatore15Edit}
          create={Operatore15Create}
          show={Operatore15Show}
        />
        <Resource
          name="Operatore25"
          list={Operatore25List}
          edit={Operatore25Edit}
          create={Operatore25Create}
          show={Operatore25Show}
        />
        <Resource
          name="Operatore24"
          list={Operatore24List}
          edit={Operatore24Edit}
          create={Operatore24Create}
          show={Operatore24Show}
        />
        <Resource
          name="Operatore18"
          list={Operatore18List}
          edit={Operatore18Edit}
          create={Operatore18Create}
          show={Operatore18Show}
        />
        <Resource
          name="Operatore16"
          list={Operatore16List}
          edit={Operatore16Edit}
          create={Operatore16Create}
          show={Operatore16Show}
        />
        <Resource
          name="Operatore13"
          list={Operatore13List}
          edit={Operatore13Edit}
          create={Operatore13Create}
          show={Operatore13Show}
        />
        <Resource
          name="Operatore9"
          list={Operatore9List}
          edit={Operatore9Edit}
          create={Operatore9Create}
          show={Operatore9Show}
        />
        <Resource
          name="Operatore7"
          list={Operatore7List}
          edit={Operatore7Edit}
          create={Operatore7Create}
          show={Operatore7Show}
        />
        <Resource
          name="Operatore10"
          list={Operatore10List}
          edit={Operatore10Edit}
          create={Operatore10Create}
          show={Operatore10Show}
        />
        <Resource
          name="Operatore8"
          list={Operatore8List}
          edit={Operatore8Edit}
          create={Operatore8Create}
          show={Operatore8Show}
        />
        <Resource
          name="Operatore14"
          list={Operatore14List}
          edit={Operatore14Edit}
          create={Operatore14Create}
          show={Operatore14Show}
        />
        <Resource
          name="Operatore12"
          list={Operatore12List}
          edit={Operatore12Edit}
          create={Operatore12Create}
          show={Operatore12Show}
        />
        <Resource
          name="Operatore17"
          list={Operatore17List}
          edit={Operatore17Edit}
          create={Operatore17Create}
          show={Operatore17Show}
        />
        <Resource
          name="Operatore11"
          list={Operatore11List}
          edit={Operatore11Edit}
          create={Operatore11Create}
          show={Operatore11Show}
        />
      </Admin>
    </div>
  );
};

export default App;
