import { memo, useCallback } from "react";
import type { Product } from "../../api/products";
import { useProductStore } from "../../store/useProductStore";

type Props = { product: Product };

function ProductCardBase({ product }: Props) {
    const setSelectedProduct = useProductStore((s) => s.setSelectedProduct);
    const openDetail = useProductStore((s) => s.openDetail);

    const onOpen = useCallback(() => {
        setSelectedProduct(product.id);
        openDetail();
    }, [product.id, setSelectedProduct, openDetail]);

    return (
        <div className="product-card" onClick={onOpen} role="button">
            <div className="product-img-wrap">
                <img src={product.image} alt={product.title} loading="lazy" />
            </div>
            <div className="product-info">
                <div className="product-title" title={product.title}>
                    {product.title}
                </div>
                <div className="product-meta">
                    <span className="price">${product.price.toFixed(2)}</span>
                    <span className="category">{product.category}</span>
                </div>
            </div>
        </div>
    );
}

export default memo(ProductCardBase);
