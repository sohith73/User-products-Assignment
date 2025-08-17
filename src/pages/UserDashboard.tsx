import { useUsersQuery } from "../hooks/useUsersQuery";
import UserTable from "../components/users/UserTable";
import SearchBar from "../components/common/SearchBar";
import Loader from "../components/common/Loader";
import ErrorBox from "../components/common/Error";
import { useUserStore } from "../store/useUserStore";
import UserPostsModal from "../components/users/UserPostsModal";

export default function UserDashboard() {
    const { data, isLoading, isError } = useUsersQuery();
    const search = useUserStore((s) => s.search);
    const setSearch = useUserStore((s) => s.setSearch);

    return (
        <section className="page">
            <div className="page-header">
                <h1>Users & Posts</h1>
                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Search users by name..."
                />
            </div>
            {isLoading && <Loader label="Loading users..." />}
            {isError && <ErrorBox message="Failed to load users" />}
            {data && <UserTable users={data} />}
            <UserPostsModal />
        </section>
    );
}
