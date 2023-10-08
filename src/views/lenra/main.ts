import { ViewRequest, Component, Flex, IComponent, View } from "@lenra/app"


export default function (_data: ViewRequest['data'], _props: ViewRequest['props']): Component<IComponent> | IComponent {
  return Flex([
    View("lenra.menu"),
    View("lenra.home")
  ])
    .direction("vertical")
    .scroll(true)
    .spacing(4)
    .crossAxisAlignment("center")
}

