import NavBar from "./NavBar";
import { useContext } from "react";
import { Context } from "../Store";

function NavBarContainer() {
  const [state] = useContext(Context);
  return <NavBar pageState={state.pageState} />;
}

export default NavBarContainer;
