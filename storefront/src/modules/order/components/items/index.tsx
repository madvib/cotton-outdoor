import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import { LineItem, Region } from "@medusajs/medusa"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

import Item from "@modules/order/components/item"
import Divider from "@modules/common/components/divider"

type ItemsProps = {
  items: LineItem[]
  region: Region
  cartId: string
}

const Items = ({ items, region, cartId }: ItemsProps) => {
  const enrichedItems = useEnrichedLineItems(items, cartId)

  return (
    <div className="flex flex-col">
      <Divider className="!mb-0" />
      <table className="table">
        <tbody>
          {enrichedItems?.length && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1
                })
                .map((item) => {
                  return <Item key={item.id} item={item} region={region} />
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </tbody>
      </table>
    </div>
  )
}

export default Items
