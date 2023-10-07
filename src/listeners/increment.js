'use strict'

import { Counter } from "../classes/Counter.js";

/**
 * 
 * @param {import("@lenra/app").props} props 
 * @param {import("@lenra/app").event} _event 
 * @param {import("@lenra/app").Api} api
 * @returns 
 */
export default async function (props, _event, api) {
    await api.data.coll(Counter).updateMany({ _id: props.id }, {
        $inc: {
            count: 1
        }
    });
}