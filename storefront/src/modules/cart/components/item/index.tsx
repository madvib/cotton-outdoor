import { useStore } from "@lib/context/store-context"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import CartItemSelect from "@modules/cart/components/cart-item-select"
import Trash from "@modules/common/icons/trash"
import Thumbnail from "@modules/products/components/thumbnail"
import Link from "next/link"
import clsx from "clsx"
type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
  type?: "full" | "preview"
}

const Item = ({ item, region, type = "full" }: ItemProps) => {
  const { updateItem, deleteItem } = useStore()
  const { handle } = item.variant.product

  return (
    <tr className="w-full">
      <th className="!pl-0 p-4 w-24">
        <Link
          href={`/products/${handle}`}
          className={clsx("flex", {
            "w-16": type === "preview",
            "small:w-24 w-12": type === "full",
          })}
        >
          <Thumbnail thumbnail={item.thumbnail} size="square" />
        </Link>
      </th>

      <th className="text-left">
        <p className="txt-medium-plus text-base-content">{item.title}</p>
        <LineItemOptions variant={item.variant} />
      </th>

      {type === "full" && (
        <th>
          <div className="flex gap-2">
            <button
              className="flex items-center gap-x-"
              onClick={() => deleteItem(item.id)}
            >
              <Trash size={18} />
            </button>
            <CartItemSelect
              value={item.quantity}
              onChange={(value) =>
                updateItem({
                  lineId: item.id,
                  quantity: parseInt(value.target.value),
                })
              }
              className="w-14 h-10 p-4"
            >
              {Array.from(
                [
                  ...Array(
                    item.variant.inventory_quantity > 0
                      ? item.variant.inventory_quantity
                      : 10
                  ),
                ].keys()
              )
                .slice(0, 10)
                .map((i) => {
                  const value = i + 1
                  return (
                    <option value={value} key={i}>
                      {value}
                    </option>
                  )
                })}
            </CartItemSelect>
          </div>
        </th>
      )}

      {type === "full" && (
        <th className="hidden small:table-cell">
          <LineItemUnitPrice item={item} region={region} style="tight" />
        </th>
      )}

      <th className="!pr-0">
        <span
          className={clsx("!pr-0", {
            "flex flex-col items-end h-full justify-center": type === "preview",
          })}
        >
          {type === "preview" && (
            <span className="flex gap-x-1 ">
              <p className="text-base-content text-opacity-50">
                {item.quantity}x{" "}
              </p>
              <LineItemUnitPrice item={item} region={region} style="tight" />
            </span>
          )}
          <LineItemPrice item={item} region={region} style="tight" />
        </span>
      </th>
    </tr>
  )
}

export default Item
