import { PaymentSession } from "@medusajs/medusa"
import Radio from "@modules/common/components/radio"
import React from "react"
import PaymentTest from "../payment-test"
import { InformationCircleSolid } from "@medusajs/icons"
import { RadioGroup } from "@headlessui/react"
import clsx from "clsx"

type PaymentContainerProps = {
  paymentSession: PaymentSession
  selectedPaymentOptionId: string | null
  disabled?: boolean
  paymentInfoMap: Record<string, { title: string; icon: JSX.Element }>
}

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentSession,
  selectedPaymentOptionId,
  paymentInfoMap,
  disabled = false,
}) => {
  const isDevelopment = process.env.NODE_ENV === "development"

  return (
    <>
      <RadioGroup.Option
        key={paymentSession.id}
        value={paymentSession.provider_id}
        disabled={disabled}
        className={clsx(
          "flex flex-col gap-y-2 text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:border-accent",
          {
            "border-accent":
              selectedPaymentOptionId === paymentSession.provider_id,
          }
        )}
      >
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-4">
            <Radio
              checked={selectedPaymentOptionId === paymentSession.provider_id}
            />
            <p className="text-base-regular">
              {paymentInfoMap[paymentSession.provider_id]?.title ||
                paymentSession.provider_id}
            </p>
            {process.env.NODE_ENV === "development" &&
              !Object.hasOwn(paymentInfoMap, paymentSession.provider_id) && (
                <div
                  className="tooltip min-w-fit"
                  data-tip="You can add a user-friendly name and icon for this payment provider in 'src/modules/checkout/components/payment/index.tsx'"
                >
                  <InformationCircleSolid color="var(--fg-muted)" />
                </div>
              )}

            {paymentSession.provider_id === "manual" && isDevelopment && (
              <PaymentTest className="hidden small:block" />
            )}
          </div>
          <span className="justify-self-end text-base-content">
            {paymentInfoMap[paymentSession.provider_id]?.icon}
          </span>
        </div>
        {paymentSession.provider_id === "manual" && isDevelopment && (
          <PaymentTest className="small:hidden text-[10px]" />
        )}
      </RadioGroup.Option>
    </>
  )
}

export default PaymentContainer
