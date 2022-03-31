import React, { useState } from "react";
import { Beer } from "../../types/Beer";

interface FavoriteStarProps {
  beer: Beer,
  isFavorited: boolean,
  callback: (beer : Beer) => void,
  className?: string,
}

export const FavoriteStar: React.FunctionComponent<FavoriteStarProps> = (props) => {
  const cls = `${ props.className } pi pi-star${props.isFavorited ? "-fill" : ""}`;

  return <i 
    onClick={(e) => {
      props.callback(props.beer);
      e.stopPropagation();
    }} 
    className={ cls }
  />;
};