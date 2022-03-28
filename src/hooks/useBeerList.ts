import axios from "axios";
import React, { useEffect } from "react";
import { ResponseStatus } from "../types/ResponseStatus";
import { Beer } from "../types/Beer";
import { unstable_batchedUpdates } from "react-dom";

export const useBeerList = (page : number, beersPerPage : number) => {
  const [requestStatus, setRequestStatus] = React.useState(ResponseStatus.PENDING);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersPerPage}`);

        unstable_batchedUpdates(() => {
          setRequestStatus(ResponseStatus.SUCCESS);
          setData(result.data);
        });
      } catch(error) {
        console.log(error);
        setRequestStatus(ResponseStatus.ERROR);
      }
    })();
  }, [page, beersPerPage]);

  return [requestStatus, data] as [ResponseStatus, Beer[]];
};