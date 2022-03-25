import * as React from 'react';
import styles from './styles.module.scss';

const BOTTLES_VARIANTS_AMOUNT = 5;

const getRandomVariantNumber = () => {
  return Math.floor(Math.random() * BOTTLES_VARIANTS_AMOUNT) + 1; 
}

interface BeerBottleProps {
  variant?: number,
}

export const BeerBottle: React.FunctionComponent<BeerBottleProps> = (props) => {  
  let variant = props.variant ? props.variant : getRandomVariantNumber();

  return <>
    <img className={ styles.bottle } src={`static/beer-${variant}.png`}/>
  </>
}