import { FixedSizeList as List } from "react-window";
import type { ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import type { User } from "../../api/users";
import UserCard from "./UserCard";
import { memo, useMemo } from "react";
import { useUserStore } from "../../store/useUserStore";

type Props = { users: User[] };

function RowRenderer(users: User[]) {
    return memo(({ index, style }: ListChildComponentProps) => (
        <UserCard user={users[index]} style={style} />
    ));
}

export default function UserTable({ users }: Props) {

    
    const search = useUserStore((s) => s.search);
    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return users;
        return users.filter((u) => u.name.toLowerCase().includes(q));
    }, [users, search]);

    const Item = useMemo(() => RowRenderer(filtered), [filtered]);

    return (
        <div className="card">
            <div className="card-header">Users</div>
            <div className="list-wrap">
                <AutoSizer disableWidth>
                    {({ height }) => (
                        <List
                            height={height}
                            itemCount={filtered.length}
                            itemSize={84}
                            width="100%"
                        >
                            {Item}
                        </List>
                    )}
                </AutoSizer>
            </div>
            <div className="card-footer">{filtered.length} users</div>
        </div>
    );
}
