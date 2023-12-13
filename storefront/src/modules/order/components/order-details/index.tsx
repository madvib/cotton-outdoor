import { Order } from "@medusajs/medusa"

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const items = order.items.reduce((acc, i) => acc + i.quantity, 0)

  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div>
      <p className="mt-8">
        We have sent the order confirmation details to{" "}
        <span className="text-ui-fg-medium-plus font-semibold">
          {order.email}
        </span>
        .
      </p>
      <p className="mt-2">
        Order date: {new Date(order.created_at).toDateString()}
      </p>
      <p className="mt-2 text-accent">Order number: {order.display_id}</p>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <p>
              Order status:{" "}
              <span className="text-base-content text-opacity-60 ">
                {formatStatus(order.fulfillment_status)}
              </span>
            </p>
            <p>
              Payment status:{" "}
              <span className="text-base-content text-opacity-60 ">
                {formatStatus(order.payment_status)}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
