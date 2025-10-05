export type RuntimeEnv = {
    nodeName: string | undefined;
};

export function getRuntimeEnv(): RuntimeEnv {
    if (import.meta.env.PROD) {
        return {
            nodeName: process.env.NODE_NAME,
        };
    }
    return {
        nodeName: ['k8s-worker-1', 'k8s-worker-2', 'k8s-worker-3'][Math.floor(Math.random() * 3)],
    }
}