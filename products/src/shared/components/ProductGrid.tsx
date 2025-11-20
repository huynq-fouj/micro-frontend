import { ProductType } from "../types/product";
import ProductItem from "./ProductItem";

export default function ProductGrid({ products }: Readonly<{ products: ProductType[] }>) {

    return (
        <div className="product-grid-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {products.map(product => <ProductItem key={product.id} product={product}/>)}
        </div>
    )
}