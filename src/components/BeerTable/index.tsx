import * as React from "react";
import "./rawStyle.scss";
import styles from "./styles.module.scss";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useBeerListPaginated } from "../../hooks/useBeerListPaginated";
import { useNavigate } from "react-router-dom";
import { FavoriteStar } from "./FavoriteStar";

const PAGE_SIZE = 20;
interface BeerTableProps {

}

export const BeerTable: React.FunctionComponent<BeerTableProps> = () => {
  const navigate = useNavigate();

  const [first, setFirst] = React.useState(0);
  const [responseStatus, beerList] = useBeerListPaginated(first, PAGE_SIZE);

  return <>
    <DataTable 
      value={ beerList } 
      paginator 
      rows={ PAGE_SIZE } 
      first={ first }
      onPage={(e) => setFirst(e.first)}
      paginatorPosition="both"
      stateStorage="session" stateKey="dt-state-demo-session"
      onRowClick={(e) => navigate(`/beer/${e.data.id}`)}
    >
      <Column header="" body={ FavoriteStar }/>
      <Column field="name" header="Name"/>
      <Column field="tagline" header="Tagline"/>
    </DataTable>
  </>;
};