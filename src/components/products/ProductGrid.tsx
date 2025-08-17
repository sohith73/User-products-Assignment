import { useMemo } from "react";
import type { Product } from "../../api/products";
import ProductCard from "./ProductCard";
import { useProductStore } from "../../store/useProductStore";

type Props = { products: Product[] };

export default function ProductGrid({ products }: Props) {
    const category = useProductStore((s) => s.category);
    const sort = useProductStore((s) => s.sort);

    const visible = useMemo(() => {
        let list = products;
        if (category !== "all")
            list = list.filter((p) => p.category === category);
        if (sort === "PRICE_ASC")
            list = [...list].sort((a, b) => a.price - b.price);
        if (sort === "PRICE_DESC")
            list = [...list].sort((a, b) => b.price - a.price);
        return list;
    }, [products, category, sort]);

    // grid-level virtualization can be added (react-window FixedSizeGrid),
    // for simplicity and responsiveness we render normally;
    // the Users list is fully virtualized already.

    return (
        <div className="grid">
            {visible.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}
