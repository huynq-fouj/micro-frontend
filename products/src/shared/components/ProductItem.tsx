import { useState } from "react";
import { ProductType } from "../types/product";
import cn from "../utils/cn";
import { formatPrice } from "../utils/formatPrice";

export default function ProductItem({ product }: Readonly<{ product: ProductType }>) {

    const [validImage, setValidImage] = useState(true);

    return (
        <article className="group product-item-container w-full rounded-lg border border-gray-200 flex flex-col hover:border-orange-400 transition">
            <div className="shrink-0 overflow-hidden rounded-lg flex justify-center items-center aspect-[4/3] bg-gray-200 w-full h-auto">
                {validImage && <img className="w-full h-full group-hover:scale-110 transition object-cover" src={product.image} alt={product.name} loading="lazy" onError={() => setValidImage(false)}/>}
            </div>
            <div className="p-3 grow flex flex-col">
                <p className="line-clamp-1 text-xl font-bold group-hover:underline text-gray-900">{ product.name }</p>
                <p className="line-clamp-1 text-sm text-gray-500">{ product.description }</p>
                { !!product.tag && product.tag.map(t => <span className={cn("border border-orange-500 text-orange-500 text-xs rounded-md px-2 w-max", t === 'hot' && 'text-white bg-orange-500')}>{ t }</span>) }
                <div className="flex items-end justify-between mt-auto mb-0">
                    <div className="text-orange-600 font-semibold">{ formatPrice(product.salePrice) }</div>
                    <div className="text-gray-500 text-xs line-through">{ formatPrice(product.originalPrice) }</div>
                </div>
            </div>
        </article>
    )
}