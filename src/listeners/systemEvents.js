'use strict'

import { Counter } from "../classes/Counter.js";

/**
 * 
 * @param {import("@lenra/app").} _props 
 * @param {import("@lenra/app").event} _event 
 * @param {import("@lenra/app").Api} api 
 */
export async function onEnvStart(_props, _event, api) {
    await createCounter(api, "global");
}

export async function onUserFirstJoin(_props, _event, api) {
    await createCounter(api, "@me");
}

async function createCounter(api, user) {
    const counterColl = api.data.coll(Counter);
    let counters = await counterColl.find({ user })
    if (counters.length == 0) {
        await counterColl.createDoc(new Counter(user, 0))
    }
}

export async function onSessionStart(_props, _event, _api) {

}