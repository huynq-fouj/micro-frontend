import { ProductType } from "../types/product";

export default function ProductItem({ product }: Readonly<{ product: ProductType }>) {

    return (
        <div className="product-item-container">Product name</div>
    )
}