import { create } from "zustand";

export type SortType = "PRICE_ASC" | "PRICE_DESC" | "NONE";

type ProductState = {
    selectedProductId: number | null;
    isDetailOpen: boolean;
    category: string | "all";
    sort: SortType;
    setSelectedProduct: (id: number | null) => void;
    openDetail: () => void;
    closeDetail: () => void;
    setCategory: (c: string | "all") => void;
    setSort: (s: SortType) => void;
};

export const useProductStore = create<ProductState>((set) => ({
    selectedProductId: null,
    isDetailOpen: false,
    category: "all",
    sort: "NONE",
    setSelectedProduct: (id) => set({ selectedProductId: id }),
    openDetail: () => set({ isDetailOpen: true }),
    closeDetail: () => set({ isDetailOpen: false }),
    setCategory: (c) => set({ category: c }),
    setSort: (s) => set({ sort: s }),
}));
