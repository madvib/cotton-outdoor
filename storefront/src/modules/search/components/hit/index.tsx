import { ProductVariant } from "@medusajs/medusa"
import Thumbnail from "@modules/products/components/thumbnail"
import Link from "next/link"

export type ProductHit = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  variants: ProductVariant[]
  collection_handle: string | null
  collection_id: string | null
}

export type HitProps = {
  hit: ProductHit
}

const Hit = ({ hit }: HitProps) => {
  return (
    <div
      key={hit.id}
      className="grid grid-cols-[1fr] gap-2 w-full p-4 shadow-elevation-card-rest hover:shadow-elevation-card-hover     items-center justify-center"
    >
      <Thumbnail thumbnail={hit.thumbnail} size="square" className="group" />
      <div className="flex flex-col justify-between group">
        <div className="flex flex-col">
          {hit.collection_id && (
            <Link
              href={`/collections/${hit.collection_handle}`}
              className="text-ui-fg-on-color hover:text-base-content text-opacity-60"
            >
              {hit.collection_handle}
            </Link>
          )}
          <p className="text-base-content text-opacity-60">{hit.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Hit
