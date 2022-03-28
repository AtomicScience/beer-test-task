import * as React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";

interface ContentWrapperProps {

}

export const ContentWrapper: React.FunctionComponent<ContentWrapperProps> = () => {
  return <div className={ styles.content_wrapper }>
    <div className={ styles.content_background }>
      <Outlet/>
    </div>
  </div>;
};