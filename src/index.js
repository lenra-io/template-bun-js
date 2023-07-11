import { join } from "path";
import { serve, file } from "bun";
import { loadConf } from '@lenra/app-server/dist/lib/conf.js';
import { File, Handler } from '@lenra/app-server/dist/lib/handler.js';
import { Indexer } from '@lenra/app-server/dist/lib/indexer.js';

const cwd = process.cwd();

// load package.json
const conf = await loadConf();
// get dir params
const baseDir = conf.dist;
// get user manifest
const manifest = await import(join(cwd, baseDir, 'manifest.js'));
// index views and listeners
const indexPromise = Indexer.index(await loadConf());
// define the resources base path
const resourceBasePath = join(cwd, baseDir, conf.resources);
// create handler
const handler = new Handler(manifest, resourceBasePath);
await indexPromise;

const server = serve({
    port: process.env.http_port || 3000,
    async fetch(req) {
        console.log(req.method);
        try {
            if (req.method === "POST") {
                const payload = await req.json();
                console.log(payload);
                const result = await handler.handleRequest(payload);
                if (result instanceof File) {
                    return new Response(file(result.path));
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
            console.error(error);
            return new Response(error.message, {
                status: 500,
            });
        }
    },
});

// console.log(`Listening on http://localhost:${server.port}...`);