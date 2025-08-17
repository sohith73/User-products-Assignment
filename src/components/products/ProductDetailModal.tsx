import Modal from "../common/Modal";
import Loader from "../common/Loader";
import ErrorBox from "../common/Error";
import { useProductQuery } from "../../hooks/useProductsQuery";
import { useProductStore } from "../../store/useProductStore";

export default function ProductDetailModal() {
    const isOpen = useProductStore((s) => s.isDetailOpen);
    const onClose = useProductStore((s) => s.closeDetail);
    const productId = useProductStore((s) => s.selectedProductId);

    const { data, isLoading, isError } = useProductQuery(productId);

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            title={`Product #${productId ?? ""}`}
        >
            {isLoading && <Loader label="Loading product..." />}
            {isError && <ErrorBox message="Failed to load product" />}
            {data && (
                <div className="product-detail">
                    <div className="product-detail-left">
                        <img src={data.image} alt={data.title} />
                    </div>
                    <div className="product-detail-right">
                        <h2>{data.title}</h2>
                        <p className="detail-price">${data.price.toFixed(2)}</p>
                        <p className="detail-cat">Category: {data.category}</p>
                        {data.rating && (
                            <p>
                                Rating: {data.rating.rate} ({data.rating.count})
                            </p>
                        )}
                        <p className="detail-desc">{data.description}</p>
                        <button className="btn-primary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
}
