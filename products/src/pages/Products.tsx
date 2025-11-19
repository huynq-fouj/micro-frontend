import { useEffect, useState } from "react"
import { PRODUCTS } from "../shared/constants/products";
import { ProductType } from "../shared/types/product";
import ProductList from "../shared/components/ProductList";

export default function Products() {

    const [products, setProducts] = useState<ProductType[]>(PRODUCTS)

    useEffect(() => {
        document.title = 'Danh sách sản phẩm';
    }, []);

    return (
        <section className="products-container container mx-auto">
            <h2 className="text-4xl mb-5 text-sky-600">Danh sách sản phẩm</h2>
            <ProductList products={products}/>
        </section>
    )
}