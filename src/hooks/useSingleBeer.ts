import axios from "axios";
import React, { useEffect } from "react";
import { ResponseStatus } from "../types/ResponseStatus";
import { Beer } from "../types/Beer";
import { unstable_batchedUpdates } from "react-dom";

export const useSingleBeer = (beerId : number | undefined) => {
  const [requestStatus, setRequestStatus] = React.useState(ResponseStatus.PENDING);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    (async () => {
      if(beerId === undefined) {
        setRequestStatus(ResponseStatus.NO_PARAMETER);
        return;
      }

      if(isNaN(beerId)) {
        setRequestStatus(ResponseStatus.WRONG_PARAMETER);
        return;
      }

      try {
        const result = await axios(`https://api.punkapi.com/v2/beers/${beerId}`);

        unstable_batchedUpdates(() => {
          setRequestStatus(ResponseStatus.SUCCESS);
          setData(result.data);
        });
      } catch(error) {
        console.log(error);
        setRequestStatus(ResponseStatus.ERROR);
      }
    })();
  }, [beerId]);

  return [requestStatus, data[0]] as [ResponseStatus, Beer];
};