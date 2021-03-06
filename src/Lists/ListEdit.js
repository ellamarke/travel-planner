import ListItems from "./ListItems";
import React, { useContext } from "react";
import { Context } from "../Store";

function ListEdit() {
  const [state] = useContext(Context);

  return <ListItems list={state.currentList} />;
}

export default ListEdit;
