import * as React from "react";

export const FavoriteStar: React.FunctionComponent<any> = (props) => {
  const className = props.state ? "pi pi-star-fill" : "pi pi-star";
  
  return <i 
    onClick={(e) => {
      e.stopPropagation();
      props.onClick(props.data, props.state);
    }} 
    className={ className }
  />;
};