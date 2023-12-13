import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
}: ProductPreviewType) => (
  <Link href={`/products/${handle}`} className="group">
    <div>
      <Thumbnail thumbnail={thumbnail} size="full" isFeatured={isFeatured} />
      <div className="flex txt-compact-medium mt-4 justify-between">
        <p className="text-base-content text-opacity-60">{title}</p>
        <div className="flex items-center gap-x-2">
          {price ? (
            <>
              {price.price_type === "sale" && (
                <p className="line-through text-ui-fg-muted">
                  {price.original_price}
                </p>
              )}
              <p
                className={clsx("text-ui-fg-muted", {
                  "text-accent": price.price_type === "sale",
                })}
              >
                {price.calculated_price}
              </p>
            </>
          ) : (
            <div className="w-20 h-6 animate-pulse bg-base-200"></div>
          )}
        </div>
      </div>
    </div>
  </Link>
)

export default ProductPreview
