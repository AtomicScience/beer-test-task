import * as React from "react";
import { useParams } from "react-router-dom";
import { useSingleBeer } from "../../hooks/useSingleBeer";
import { ResponseStatus } from "../../types/ResponseStatus";
import { BeerInfo } from "./BeerInfo";
import styles from "./styles.module.scss";

interface BeerInfoHOCProps {

}

export const BeerInfoHOC: React.FunctionComponent<BeerInfoHOCProps> = () => {
  const params = useParams();
  const beerId = params.beerId ? parseInt(params.beerId, 10) : undefined;

  const [responseStatus, beer] = useSingleBeer(beerId);

  console.log(responseStatus, beer);

  if(responseStatus === ResponseStatus.SUCCESS) {
    return <BeerInfo beer={beer}/>;
  } else if(responseStatus === ResponseStatus.WRONG_PARAMETER) {
    return <h1> Wrong Parameter </h1>;
  } else if(responseStatus === ResponseStatus.NO_PARAMETER) {
    return <h1> Missing Parameter </h1>;
  } else if(responseStatus === ResponseStatus.ERROR) {
    return <h1> Request Error </h1>;
  } else {
    return <h1> Pending... </h1>;
  }
};