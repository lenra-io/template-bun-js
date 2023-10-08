import { ViewRequest, DataApi, Component, Flex, IComponent, View } from "@lenra/app"
import { Counter } from "../../classes/Counter.js"

export default function (_data: ViewRequest['data'], _props: ViewRequest['props']): Component<IComponent> | IComponent {
    return Flex([
        View("lenra.counter")
            .find(Counter, {
                "user": "@me"
            })
            .props({ text: "My personnal counter" }),
        View("lenra.counter")
            .find(Counter, {
                "user": "global"
            })
            .props({ text: "The common counter" }),
    ])
        .direction("vertical")
        .spacing(16)
        .mainAxisAlignment("spaceEvenly")
        .crossAxisAlignment("center")
}

