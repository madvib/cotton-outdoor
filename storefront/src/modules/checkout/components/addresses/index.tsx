import { useCheckout } from "@lib/context/checkout-context"
import { CheckCircleSolid } from "@medusajs/icons"
import Spinner from "@modules/common/icons/spinner"
import BillingAddress from "../billing_address"
import ShippingAddress from "../shipping-address"
import Divider from "@modules/common/components/divider"

const Addresses = () => {
  const {
    sameAsBilling: { state: checked, toggle: onChange },
    editAddresses: { state: isOpen, open },
    editShipping: { close: closeShipping },
    editPayment: { close: closePayment },
    setAddresses,
    handleSubmit,
    cart,
  } = useCheckout()

  const handleEdit = () => {
    open()
    closeShipping()
    closePayment()
  }

  return (
    <div className="bg-base-100 px-4 small:px-8">
      <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="flex flex-row text-3xl-regular gap-x-2 items-baseline">
          Address
          {!isOpen && <CheckCircleSolid />}
        </h2>
        {!isOpen && (
          <button onClick={handleEdit} className="text-accent text-sm">
            Edit
          </button>
        )}
      </div>
      {isOpen ? (
        <div className="pb-8">
          <ShippingAddress checked={checked} onChange={onChange} />

          {!checked && (
            <div>
              <h2 className="text-3xl-regular gap-x-4 pb-6 pt-8">
                Billing address
              </h2>

              <BillingAddress />
            </div>
          )}

          <button className="btn mt-6" onClick={handleSubmit(setAddresses)}>
            Continue to delivery
          </button>
        </div>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="flex items-start gap-x-1 w-full">
                  <div className="flex flex-col w-1/3">
                    <p className="txt-medium-plus text-primary mb-1">
                      Shipping Address
                    </p>
                    <p className="txt-medium text-base-content">
                      {cart.shipping_address.first_name}{" "}
                      {cart.shipping_address.last_name}
                    </p>
                    <p className="txt-medium text-base-content">
                      {cart.shipping_address.address_1}{" "}
                      {cart.shipping_address.address_2}
                    </p>
                    <p className="txt-medium text-base-content">
                      {cart.shipping_address.postal_code},{" "}
                      {cart.shipping_address.city}
                    </p>
                    <p className="txt-medium text-base-content">
                      {cart.shipping_address.country_code?.toUpperCase()}
                    </p>
                  </div>

                  <div className="flex flex-col w-1/3 ">
                    <p className="txt-medium-plus text-primary mb-1">Contact</p>
                    <p className="txt-medium text-base-content">
                      {cart.shipping_address.phone}
                    </p>
                    <p className="txt-medium text-base-content">{cart.email}</p>
                  </div>

                  <div className="flex flex-col w-1/3">
                    <p className="txt-medium-plus text-primary mb-1">
                      Billing Address
                    </p>

                    {checked ? (
                      <p className="txt-medium text-base-content">
                        Billing- and delivery address are the same.
                      </p>
                    ) : (
                      <>
                        <p className="txt-medium text-base-content">
                          {cart.billing_address.first_name}{" "}
                          {cart.billing_address.last_name}
                        </p>
                        <p className="txt-medium text-base-content">
                          {cart.billing_address.address_1}{" "}
                          {cart.billing_address.address_2}
                        </p>
                        <p className="txt-medium text-base-content">
                          {cart.billing_address.postal_code},{" "}
                          {cart.billing_address.city}
                        </p>
                        <p className="txt-medium text-base-content">
                          {cart.billing_address.country_code?.toUpperCase()}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="">
                <Spinner />
              </div>
            )}
          </div>
        </div>
      )}
      <Divider className="mt-8" />
    </div>
  )
}

export default Addresses
