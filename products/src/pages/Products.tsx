import { useEffect, useState } from "react"
import { PRODUCTS } from "../shared/constants/products";
import { ProductType } from "../shared/types/product";
import ProductGrid from "../shared/components/ProductGrid";

export default function Products() {

    const [products, setProducts] = useState<ProductType[]>(PRODUCTS)

    useEffect(() => {
        document.title = 'Danh sách sản phẩm';
    }, []);

    return (
        <section className="products-container container mx-auto py-8">
            <h2 className="text-4xl mb-5 text-orange-600 font-semibold">Danh sách sản phẩm</h2>
            <ProductGrid products={products}/>
        </section>
    )
}