export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export async function fetchPostsByUser(userId: number): Promise<Post[]> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
}
