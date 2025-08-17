export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
};

export async function fetchUsers(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
}
