import { Flex, View } from "@lenra/app";

export default function (_data, _props) {
  return Flex([
    View("lenra.menu"),
    View("lenra.home")
  ])
    .direction("vertical")
    .scroll(true)
    .spacing(4)
    .crossAxisAlignment("center")
}

