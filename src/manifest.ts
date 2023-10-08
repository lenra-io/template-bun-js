import { Manifest, View } from '@lenra/app';
import { Counter } from './classes/Counter.js';

const manifest: Manifest = {
    json: {
        routes: [
            {
                path: "/counter/global",
                view: View("counter").find(Counter, {
                    "user": "global"
                }).toJSON()
            },
            {
                path: "/counter/me",
                view: View("counter").find(Counter, {
                    "user": "@me"
                }).toJSON()
            }
        ]
    },
    lenra: {
        routes: [
            {
                path: "/",
                view: View("lenra.main").toJSON()
            }
        ]
    }
};

export default manifest;