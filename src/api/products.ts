export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: { rate: number; count: number };
};

export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export async function fetchCategories(): Promise<string[]> {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
}

export async function fetchProductById(id: number): Promise<Product> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
}
