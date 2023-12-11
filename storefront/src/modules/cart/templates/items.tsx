import { LineItem, Region } from "@medusajs/medusa"
import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <div>
      <div className="pb-3 flex items-center">
        <h3 className="text-[2rem] leading-[2.75rem]">Cart</h3>
      </div>
      <table className="table">
        <thead className="border-t-0">
          <tr className="text-base-content text-opacity-60 txt-medium-plus">
            <th className="!pl-0">Item</th>
            <th></th>
            <th>Quantity</th>
            <th className="hidden small:table-cell">Price</th>
            <th className="!pr-0 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {items && region
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

export default ItemsTemplate
