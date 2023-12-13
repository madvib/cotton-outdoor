import { useStore } from "@lib/context/store-context"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import CartItemSelect from "@modules/cart/components/cart-item-select"
import Trash from "@modules/common/icons/trash"
import Thumbnail from "@modules/products/components/thumbnail"
import Link from "next/link"

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
}

const Item = ({ item, region }: ItemProps) => {
  return (
    <tr className="w-full">
      <th className="!pl-0 p-4 w-24">
        <div className="flex w-16">
          <Thumbnail thumbnail={item.thumbnail} size="square" />
        </div>
      </th>

      <th className="text-left">
        <p className="txt-medium-plus text-base-content">{item.title}</p>
        <LineItemOptions variant={item.variant} />
      </th>

      <th className="!pr-0">
        <span className="!pr-0 flex flex-col items-end h-full justify-center">
          <span className="flex gap-x-1 ">
            <p className="text-ui-fg-muted">{item.quantity}x </p>
            <LineItemUnitPrice item={item} region={region} style="tight" />
          </span>

          <LineItemPrice item={item} region={region} style="tight" />
        </span>
      </th>
    </tr>
  )
}

export default Item
