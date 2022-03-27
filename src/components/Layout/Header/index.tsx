import * as React from "react";
import { BeerBottle } from "./BeerBottle";
import styles from "./styles.module.scss";

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = () => {
  return <nav className={ styles.header }>
    <BeerBottle></BeerBottle>
    <h1>BeerHUB</h1>
  </nav>;
};