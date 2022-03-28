import axios from "axios";
import React, { useEffect } from "react";
import { ResponseStatus } from "../types/ResponseStatus";
import { Beer } from "../types/Beer";

export const useSingleBeer = (beerId : number) => {
  const [requestStatus, setRequestStatus] = React.useState(ResponseStatus.PENDING);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios(`https://api.punkapi.com/v2/beers/${beerId}`);

        setRequestStatus(ResponseStatus.SUCCESS);
        setData(result.data);
      } catch(error) {
        console.log(error);
        setRequestStatus(ResponseStatus.ERROR);
      }
    })();
  }, []);

  return [requestStatus, data] as [ResponseStatus, Beer[]];
};