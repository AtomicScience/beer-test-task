import * as React from "react";
import { ContentWrapper } from "./ContentWrapper";
import { Header } from "./Header";
import styles from "./styles.module.scss";
interface LayoutProps {

} 

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  return <div className={ styles.page }>
    <Header/>
    <ContentWrapper>
      { props.children }
    </ContentWrapper>
  </div>;
};