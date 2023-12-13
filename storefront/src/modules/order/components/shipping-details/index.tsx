import { Order } from "@medusajs/medusa"
import Divider from "@modules/common/components/divider"
import { formatAmount } from "medusa-react"

type ShippingDetailsProps = {
  order: Order
}

const ShippingDetails = ({ order }: ShippingDetailsProps) => {
  return (
    <div>
      <h2 className="flex flex-row text-3xl-regular my-6">Delivery</h2>
      <div className="flex items-start gap-x-8">
        <div className="flex flex-col w-1/3">
          <p className="txt-medium-plus text-base-content mb-1">
            Shipping Address
          </p>
          <p className="txt-medium text-base-content text-opacity-60">
            {order.shipping_address.first_name}{" "}
            {order.shipping_address.last_name}
          </p>
          <p className="txt-medium text-base-content text-opacity-60">
            {order.shipping_address.address_1}{" "}
            {order.shipping_address.address_2}
          </p>
          <p className="txt-medium text-base-content text-opacity-60">
            {order.shipping_address.postal_code}, {order.shipping_address.city}
          </p>
          <p className="txt-medium text-base-content text-opacity-60">
            {order.shipping_address.country_code?.toUpperCase()}
          </p>
        </div>

        <div className="flex flex-col w-1/3 ">
          <p className="txt-medium-plus text-base-content mb-1">Contact</p>
          <p className="txt-medium text-base-content text-opacity-60">
            {order.shipping_address.phone}
          </p>
          <p className="txt-medium text-base-content text-opacity-60">
            {order.email}
          </p>
        </div>

        <div className="flex flex-col w-1/3">
          <p className="txt-medium-plus text-base-content mb-1">Method</p>
          <p className="txt-medium text-base-content text-opacity-60">
            {order.shipping_methods[0].shipping_option.name} (
            {formatAmount({
              amount: order.shipping_methods[0].price,
              region: order.region,
            })
              .replace(/,/g, "")
              .replace(/\./g, ",")}
            )
          </p>
        </div>
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default ShippingDetails
