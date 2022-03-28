import lodash from "lodash";
import { Beer } from "../types/Beer";
import { ResponseStatus } from "../types/ResponseStatus";
import { useBeerList } from "./useBeerList";

/* 
  It seems that DataTable component does not provide adequate means to
  support some sort of load-on-demand - for correct functioning, it requires
  all the data to be loaded.

  This hook is a hacky way to bypass this limitation by loading only the data that
  should be visible on screen - and filling the rest with empty objects

  | leftPadSize |    pageSize    | rightPadSize
  {}, {}, {}, {}, {beer}, {beer}, {}, {}, {}, {}

  beersAmount = leftPadSize + pageSize + rightPadSize;
*/
export const useBeerListPaginated = (firstElementIndex : number, pageSize : number) => {
  const pageIndex = Math.ceil((firstElementIndex + 1) / pageSize);

  const [responceStatus, beerList] = useBeerList(pageIndex, pageSize);

  if(responceStatus !== ResponseStatus.SUCCESS) {
    return [responceStatus, []] as [ResponseStatus, Beer[]];
  }

  // This number should have been provided in the headers of the responce.
  // Unfortunately, it is not, so the only option is to hardcore it;
  //
  // This issue is recognized by the author, yet it was not addressed
  // (see https://github.com/sammdec/punkapi/issues/52)
  const beersAmount = 325;  

  const leftPadSize  = firstElementIndex;
  const rightPadSize = Math.max(0, beersAmount - (leftPadSize + beerList.length));

  const leftPad  = lodash.fill(Array(leftPadSize), {});
  const page     = beerList;
  const rightPad = lodash.fill(Array(rightPadSize), {});

  return [ResponseStatus.SUCCESS, lodash.concat(leftPad, page, rightPad)] as [ResponseStatus, Beer[]];
};