import { create } from "zustand";

type UserState = {
    selectedUserId: number | null;
    isPostsOpen: boolean;
    search: string;
    setSelectedUser: (id: number | null) => void;
    openPosts: () => void;
    closePosts: () => void;
    setSearch: (s: string) => void;
};

export const useUserStore = create<UserState>((set) => ({
    selectedUserId: null,
    isPostsOpen: false,
    search: "",
    setSelectedUser: (id) => set({ selectedUserId: id }),
    openPosts: () => set({ isPostsOpen: true }),
    closePosts: () => set({ isPostsOpen: false }),
    setSearch: (s) => set({ search: s }),
}));
