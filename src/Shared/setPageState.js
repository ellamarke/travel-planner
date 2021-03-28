import { useContext, useEffect } from "react";
import { Context } from "../Store";

function SetPageState({ pageState }) {
  const [state, setState] = useContext(Context);
  useEffect(() => {
    setState({
      ...state,
      pageState,
    });
  }, []);
  return null;
}

export default SetPageState;
