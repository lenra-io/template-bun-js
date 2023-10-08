import { Api, ListenerRequest } from '@lenra/app';
import { Counter } from '../classes/Counter.js';

export default async function (props: { id: string }, _event: ListenerRequest['event'], api: Api) {
    await api.data.coll(Counter).updateMany({ _id: props.id }, {
        $inc: {
            count: 1
        }
    });
}