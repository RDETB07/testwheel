import { Table } from "./Table";
import { Wheel } from "./Wheel";

import "./react-casino-roulette/index.css";

export const App = () => {
  return (
    <div className="App">
      <Wheel />
      <Table />
    </div>
  );
};
