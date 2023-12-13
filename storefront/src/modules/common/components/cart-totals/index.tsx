import { Cart, Order } from "@medusajs/medusa"
import { InformationCircleSolid } from "@medusajs/icons"
import { formatAmount } from "medusa-react"
import React from "react"

type CartTotalsProps = {
  data: Omit<Cart, "refundable_amount" | "refunded_total"> | Order
}

const CartTotals: React.FC<CartTotalsProps> = ({ data }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = data

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: data.region,
      includeTaxes: false,
    })
  }

  return (
    <div>
      <div className="flex flex-col gap-y-2 text-medium text-base-content">
        <div className="flex items-center justify-between">
          <span className="flex gap-x-1 items-center">
            Subtotal
            <div
              className="tooltip"
              data-tip="Cart total excluding shipping and taxes."
            >
              <InformationCircleSolid color="oklch(var(--bc))" />
            </div>
          </span>
          <span>{getAmount(subtotal)}</span>
        </div>
        {!!discount_total && (
          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span className="text-accent">- {getAmount(discount_total)}</span>
          </div>
        )}
        {!!gift_card_total && (
          <div className="flex items-center justify-between">
            <span>Gift card</span>
            <span className="text-accent">- {getAmount(gift_card_total)}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>{getAmount(shipping_total)}</span>
        </div>
        <div className="flex justify-between">
          <span className="flex gap-x-1 items-center ">Taxes</span>
          <span>{getAmount(tax_total)}</span>
        </div>
      </div>
      <div className="h-px w-full border-b border-neutral my-4" />
      <div className="flex items-center justify-between text-accent mb-2 text-base">
        <span>Total</span>
        <span className="txt-xlarge-plus">{getAmount(total)}</span>
      </div>
      <div className="h-px w-full border-b border-neutral mt-4" />
    </div>
  )
}

export default CartTotals
