import { Flex, Text, Button, Component, IComponent } from '@lenra/app';
import { Counter } from '../../classes/Counter.js';

export default function (counters: Counter[], { text }): Component<IComponent> | IComponent {
  const counter = counters[0];
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

