import { File } from '@lenra/app/dist/lib/handler.js';
import { App } from "@lenra/app";

const port = process.env.http_port || 3000;

export default class BunServer extends App {
    start() {
        const app = this;
        Bun.serve({
            port,
            async fetch(req) {
                try {
                    if (req.method === "POST") {
                        const payload = await req.json();
                        const result = await app.handler.handleRequest(payload);
                        if (result instanceof File) {
                            return new Response(Bun.file(result.path));
                        }
                        else if (result) {
                            return new Response(JSON.stringify(result));
                        }
                        else {
                            return new Response(null);
                        }
                    }
                    return new Response(null, {
                        status: 400,
                    });
                }
                catch (error) {
                    // TODO: Manage different errors depending on type
                    console.log("Error occured", error);
                    return new Response(error.message, {
                        status: 500,
                    });
                }
            },
        });
        Bun.write("/tmp/.lock", "\n");
    }
}