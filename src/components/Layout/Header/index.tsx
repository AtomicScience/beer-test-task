import * as React from "react";
import styles from "./styles.module.scss";

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = () => {
  return <header className={ styles.header }>
    <div className={ styles.header_page_wrapper }>
      <a>BeerHUB</a>
    </div>
  </header>;
};