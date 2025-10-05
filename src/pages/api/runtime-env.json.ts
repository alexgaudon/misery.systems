import { getRuntimeEnv } from "../../lib/runtimeEnv";

export const GET = () => {
    const data = getRuntimeEnv();
    return new Response(JSON.stringify(data), {
        headers: { "content-type": "application/json" },
    });
};


