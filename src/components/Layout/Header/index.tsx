import * as React from 'react';
import { BeerBottle } from './BeerBottle';
import styles from "./styles.module.scss"

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return <nav className={ styles.header }>
    <BeerBottle></BeerBottle>
  </nav>
}