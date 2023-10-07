import { Listener } from "@lenra/app";
import { Counter } from "../classes/Counter.js";

/**
 * 
 * @param {Counter[]} param0 
 * @param {*} _props 
 * @returns {import("@lenra/app").JsonViewResponse}
 */
export default function ([counter], _props) {
  return {
    value: counter.count,
    onIncrement: Listener("increment")
      .props({
        id: counter._id
      })
  };
}
