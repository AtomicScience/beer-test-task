import { add, remove } from "../redux/favoriteSlice";
import { useAppDispatch, useAppSelector } from "../redux/storeHooks";
import { Beer } from "../types/Beer";

export const useBeersFavorited = () => {
  const favoritedBeer = useAppSelector(state => state.favorite.favoritedIds);
  const dispatch = useAppDispatch();

  const isBeerFavorited = (beer : Beer) => favoritedBeer.includes(beer.id);

  const setBeerFavorited = (beer : Beer, newIsFavorited : boolean) => {
    if(isBeerFavorited(beer) === newIsFavorited) return;

    dispatch(newIsFavorited ? add(beer.id) : remove(beer.id));
  };

  const toggleBeerFavorited = (beer : Beer) => {
    setBeerFavorited(beer, !isBeerFavorited(beer));
  };

  return [isBeerFavorited, setBeerFavorited, toggleBeerFavorited] as 
    [
      (beer : Beer) => boolean,
      (beer : Beer, newIsFavorited : boolean) => void,
      (beer : Beer) => void,
    ];
};