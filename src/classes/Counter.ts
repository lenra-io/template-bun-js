import { Data } from "@lenra/app";

export class Counter extends Data {
    user: string
    count: number

    constructor(user: string, count: number) {
        super();
        this.user = user;
        this.count = count;
    }
}