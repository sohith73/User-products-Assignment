import Loader from "../components/common/Loader";
import ErrorBox from "../components/common/Error";
import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import ProductDetailModal from "../components/products/ProductDetailModal";
import { useProductsQuery } from "../hooks/useProductsQuery";

export default function ProductDashboard() {
    const { data, isLoading, isError } = useProductsQuery();

    return (
        <section className="page">
            <div className="page-header">
                <h1>Products</h1>
                <ProductFilter />
            </div>
            {isLoading && <Loader label="Loading products..." />}
            {isError && <ErrorBox message="Failed to load products" />}
            {data && <ProductGrid products={data} />}
            <ProductDetailModal />
        </section>
    );
}
