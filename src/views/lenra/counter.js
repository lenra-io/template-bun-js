import { Flex, Text, Button } from "@lenra/app";

/**
 * 
 * @param {import("../../classes/Counter").Counter[]} param0 
 * @param {{text: string}} param1 
 * @returns 
 */
export default function ([counter], { text }) {
  return Flex([
    Text(`${text}: ${counter.count}`),
    Button("+")
      .onPressed("increment", {
        "id": counter._id
      })
  ])
    .spacing(16)
    .mainAxisAlignment("spaceEvenly")
    .crossAxisAlignment("center")
}

