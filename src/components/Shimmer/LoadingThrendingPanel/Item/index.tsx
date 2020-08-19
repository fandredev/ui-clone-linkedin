import React from "react";
import { Container } from "./styles";
import Skeleton from "../../../Skeleton";

const Item = () => {
  return (
    <Container>
      <div className="row">
        <Skeleton className="square-skeleton white" />
        <div className="column">
          <Skeleton className="row-skeleton white" />
          <Skeleton className="row-skeleton white" />
        </div>
      </div>
    </Container>
  );
};
export default Item;
