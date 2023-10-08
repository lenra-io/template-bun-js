import { Listener } from "@lenra/app";
import { Counter } from "../classes/Counter.js";

export default function (counters: Counter[], _props: any) {
  const counter = counters[0];
  return {
    value: counter.count,
    onIncrement: Listener("increment")
      .props({
        id: counter._id
      })
  };
}
