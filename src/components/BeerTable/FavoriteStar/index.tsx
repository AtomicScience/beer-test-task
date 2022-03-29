import React, { useState } from "react";
import { Beer } from "../../../types/Beer";

interface FavoriteStarProps {
  beer: Beer,
  isFavorited: boolean,
  callback: (beer : Beer) => void,
}

export const FavoriteStar: React.FunctionComponent<FavoriteStarProps> = (props) => {
  const cls = `pi pi-star${props.isFavorited ? "-fill" : ""}`;

  return <i 
    onClick={(e) => {
      props.callback(props.beer);
      e.stopPropagation();
    }} 
    className={ cls }
  />;
};