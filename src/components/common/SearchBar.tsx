import { useEffect, useMemo, useState } from "react";

type Props = {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    delay?: number;
};

export default function SearchBar({
    value,
    onChange,
    placeholder = "Search...",
    delay = 300,
}: Props) {
    const [input, setInput] = useState(value);
    const debounced = useMemo(() => {
        let t: number | undefined;
        return (v: string) => {
            window.clearTimeout(t);
            t = window.setTimeout(() => onChange(v), delay);
        };
    }, [onChange, delay]);

    useEffect(() => setInput(value), [value]);

    return (
        <div className="search">
            <input
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    debounced(e.target.value);
                }}
                placeholder={placeholder}
                className="search-input"
            />
        </div>
    );
}
