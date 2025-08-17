import { useQuery } from "@tanstack/react-query";
import { fetchPostsByUser } from "../api/posts";

export const usePostsQuery = (userId: number | null) =>
    useQuery({
        queryKey: ["posts", userId],
        queryFn: () => fetchPostsByUser(userId as number),
        enabled: !!userId,
    });
