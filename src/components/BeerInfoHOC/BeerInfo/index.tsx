import * as React from "react";
import { Link } from "react-router-dom";
import { useBeersFavorited } from "../../../hooks/useBeersFavorited";
import { BeerDetailed } from "../../../types/BeerDetailed";
import { FavoriteStar } from "../../FavoriteStar";
import styles from "./styles.module.scss";

interface BeerInfoProps {
  beer : BeerDetailed,
}

export const BeerInfo: React.FunctionComponent<BeerInfoProps> = (props) => {
  const [isBeerFavorited, , toggleBeerFavorited] = useBeersFavorited();

  return <>
    <Link to="/" className={ styles.go_back_button }>
      <i className="pi pi-chevron-left"/> Back to the main menu
    </Link>
    <div className={ styles.beer_info }>
      <div className={ styles.beer_card }>
        <h1> 
          <FavoriteStar 
            beer={ props.beer } 
            isFavorited={isBeerFavorited(props.beer)} 
            callback={toggleBeerFavorited}
            className={ styles.favorite_star }
          />
          {" "} { props.beer.name }
        </h1>

        <h2> { props.beer.tagline} </h2>

        <p> { props.beer.description } </p>
      </div>

      <div className={ styles.beer_table }>

      </div>

      <img src={ props.beer.image_url }/>
    </div>
  </>;
};