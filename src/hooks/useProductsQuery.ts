import { useQuery } from "@tanstack/react-query";
import {
    fetchProducts,
    fetchCategories,
    fetchProductById,
} from "../api/products";

export const useProductsQuery = () =>
    useQuery({ queryKey: ["products"], queryFn: fetchProducts });

export const useCategoriesQuery = () =>
    useQuery({ queryKey: ["categories"], queryFn: fetchCategories });

export const useProductQuery = (id: number | null) =>
    useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(id as number),
        enabled: !!id,
    });
