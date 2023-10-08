import { Api, ListenerRequest } from '@lenra/app';
import { Counter } from '../classes/Counter.js';

export async function onEnvStart(_props: ListenerRequest['props'], _event: ListenerRequest['event'], api: Api) {
    await createCounter(api, "global");
}

export async function onUserFirstJoin(_props: ListenerRequest['props'], _event: ListenerRequest['event'], api: Api) {
    await createCounter(api, "@me");
}

export async function onSessionStart(_props: ListenerRequest['props'], _event: ListenerRequest['event'], api: Api) {

}

export async function onSessionStop(_props: ListenerRequest['props'], _event: ListenerRequest['event'], api: Api) {

}

export async function onUserLeave(_props: ListenerRequest['props'], _event: ListenerRequest['event'], api: Api) {

}

export async function onEnvStop(_props: ListenerRequest['props'], _event: ListenerRequest['event'], api: Api) {

}

async function createCounter(api: Api, user: string) {
    const counterColl = api.data.coll(Counter);
    let counters = await counterColl.find({ user })
    if (counters.length == 0) {
        await counterColl.createDoc(new Counter(user, 0))
    }
}