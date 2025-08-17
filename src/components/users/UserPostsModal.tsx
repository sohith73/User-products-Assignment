import Modal from "../common/Modal";
import Loader from "../common/Loader";
import ErrorBox from "../common/Error";
import { usePostsQuery } from "../../hooks/usePostsQuery";
import { useUserStore } from "../../store/useUserStore";

export default function UserPostsModal() {
    const isOpen = useUserStore((s) => s.isPostsOpen);
    const onClose = useUserStore((s) => s.closePosts);
    const userId = useUserStore((s) => s.selectedUserId);

    const { data, isLoading, isError } = usePostsQuery(userId);

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            title={`Posts of User #${userId ?? ""}`}
            width={800}
        >
            {isLoading && <Loader label="Loading posts..." />}
            {isError && <ErrorBox message="Failed to load posts" />}

            {data && (
                <div className="posts">
                    {data.map((p) => (
                        <article key={p.id} className="post">
                            <h3>{p.title}</h3>
                            <p>{p.body}</p>
                        </article>
                    ))}

                    <div style={{ marginTop: "12px", textAlign: "right" }}>
                        <button className="btn-primary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
}
