import * as React from "react";
import { Link } from "react-router-dom";
import { useBeerList } from "../../services/useBeerList";
import { ResponseStatus } from "../../types/ResponseStatus";
import styles from "./styles.module.scss";

interface BeerTableProps {

}

export const BeerTable: React.FunctionComponent<BeerTableProps> = () => {
  const [requestStatus, data] = useBeerList();

  return <>
    <h1> {ResponseStatus[requestStatus]} </h1>
    <ul>
      { data.map(beer => 
        <li key={beer.id}> 
          <Link to={`/beer/${beer.id}`}>
            {beer.name}
          </Link> 
        </li>) }
    </ul>
  </>;
};