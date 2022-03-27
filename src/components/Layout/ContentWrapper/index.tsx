import * as React from "react";
import styles from "./styles.module.scss";

interface ContentWrapperProps {

}

export const ContentWrapper: React.FunctionComponent<ContentWrapperProps> = (props) => {
  return <div className={ styles.content_wrapper }>
    <div className={ styles.content_background }>
      {props.children}
    </div>
  </div>;
};