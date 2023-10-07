import { View } from "@lenra/app";
import { Counter } from "./classes/Counter.js";

/**
 * @type {import("@lenra/app").Manifest["json"]}
 */
export const json = {
    routes: [
        {
            path: "/counter/global",
            view: View("counter").find(Counter, {
                "user": "global"
            })
        },
        {
            path: "/counter/me",
            view: View("counter").find(Counter, {
                "user": "@me"
            })
        }
    ]
};

/**
 * @type {import("@lenra/app").Manifest["lenra"]}
 */
export const lenra = {
    routes: [
        {
            path: "/",
            view: View("lenra.main")
        }
    ]
};
