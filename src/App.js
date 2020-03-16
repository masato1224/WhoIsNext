import React from "react";
import "./styles.css";
import NaviBar from "./component/NaviBar";
import Buttons from "./component/Buttons";
import NameCard from "./component/NameCard";
import { useAppState } from "./useAppState";

export default function App() {
  const [name, style, start, stop] = useAppState();

  return (
    <div className="App">
      <NaviBar appName="Who's Next?" />
      <Buttons startOnClick={() => start()} stopOnclick={() => stop()} />
      <NameCard color={style} name={name} />
    </div>
  );
}
