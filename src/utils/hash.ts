// Very small stable hash for memo keys / cache labels
export function stableHash(input: unknown): string {
    const str = typeof input === "string" ? input : JSON.stringify(input) ?? "";
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        // djb2
        hash = (hash << 5) + hash + str.charCodeAt(i);
        hash |= 0;
    }
    return `h${(hash >>> 0).toString(16)}`;
}
