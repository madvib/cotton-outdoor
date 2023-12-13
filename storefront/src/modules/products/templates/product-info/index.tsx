import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Link from "next/link"
import React from "react"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <Link
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-base-content text-opacity-60"
          >
            {product.collection.title}
          </Link>
        )}
        <h2 className="text-3xl leading-10 text-base-content">
          {product.title}
        </h2>

        <p className="text-medium text-base-content text-opacity-60">
          {product.description}
        </p>
      </div>
    </div>
  )
}

export default ProductInfo
