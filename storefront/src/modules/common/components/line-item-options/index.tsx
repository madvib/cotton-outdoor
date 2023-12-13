import { ProductVariant } from "@medusajs/medusa"

type LineItemOptionsProps = { variant: ProductVariant }

const LineItemOptions = ({ variant }: LineItemOptionsProps) => {
  return (
    <>
      {variant.options?.map((option) => {
        const optionName =
          variant.product.options.find((opt) => opt.id === option.option_id)
            ?.title || "Option"
        return (
          <p
            key={option.id}
            className="txt-medium text-base-content text-opacity-60"
          >
            {optionName}: {option.value}
          </p>
        )
      })}
    </>
  )
}

export default LineItemOptions
