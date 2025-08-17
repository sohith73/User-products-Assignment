import { useMemo } from "react";
import { useCategoriesQuery } from "../../hooks/useProductsQuery";
import { useProductStore,  } from "../../store/useProductStore";
import  type {  SortType } from "../../store/useProductStore";
import { stableHash } from "../../utils/hash";

export default function ProductFilter() {
    const { data: categories } = useCategoriesQuery();
    const category = useProductStore((s) => s.category);
    const setCategory = useProductStore((s) => s.setCategory);
    const sort = useProductStore((s) => s.sort);
    const setSort = useProductStore((s) => s.setSort);

    // Example "hashing" usage to create a stable label/key for current filter set
    const cacheKey = useMemo(
        () => stableHash({ category, sort }),
        [category, sort]
    );

    return (
        <div className="filters">
            <div className="filters-row">
                <label>
                    Category:
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as any)}
                    >
                        <option value="all">All</option>
                        {categories?.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Sort:
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value as SortType)}
                    >
                        <option value="NONE">Default</option>
                        <option value="PRICE_ASC">Price: Low → High</option>
                        <option value="PRICE_DESC">Price: High → Low</option>
                    </select>
                </label>
            </div>
            {/* <div className="filters-hash">cache: {cacheKey} :we can remove it in deployment</div> */}
            <div className="filters-hash">cache: {cacheKey}</div>
        </div>
    );
}
