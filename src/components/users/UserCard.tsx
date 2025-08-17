import { memo, useCallback } from "react";
import type { User } from "../../api/users";
import { useUserStore } from "../../store/useUserStore";

type Props = {
    user: User;
    style?: React.CSSProperties; // required for react-window
};

function UserCardBase({ user, style }: Props) {
    const setSelectedUser = useUserStore((s) => s.setSelectedUser);
    const openPosts = useUserStore((s) => s.openPosts);

    const onClick = useCallback(() => {
        setSelectedUser(user.id);
        openPosts();
    }, [user.id, setSelectedUser, openPosts]);

    return (
        <div className="user-row" style={style} onClick={onClick} role="button">
            <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-sub">
                    {/* <span className="hidden lg:inline">@{user.username}</span> */}
                    <span>• {user.email}</span>
                    <span>• {user.phone}</span>
                </div>
            </div>
            <div className="user-chip">View Posts</div>
        </div>
    );
}

export default memo(UserCardBase);
