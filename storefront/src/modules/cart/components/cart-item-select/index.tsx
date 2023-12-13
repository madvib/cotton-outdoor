import { ErrorMessage } from "@hookform/error-message"
import {
  forwardRef,
  SelectHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { get } from "react-hook-form"

export type NativeSelectProps = {
  placeholder?: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">

const CartItemSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    {
      placeholder = "Select...",
      errors,
      touched,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const innerRef = useRef<HTMLSelectElement>(null)
    const [isPlaceholder, setIsPlaceholder] = useState(false)

    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    )

    const hasError = props.name
      ? get(errors, props.name) && get(touched, props.name)
      : false

    useEffect(() => {
      if (innerRef.current && innerRef.current.value === "") {
        setIsPlaceholder(true)
      } else {
        setIsPlaceholder(false)
      }
    }, [innerRef.current?.value])

    return (
      <div>
        <select
          ref={innerRef}
          {...props}
          className="select appearance-none bg-transparent border-none px-4 transition-colors duration-150 focus:border-base-300 outline-none w-16 h-16 items-center justify-center"
        >
          <option disabled value="">
            {placeholder}
          </option>
          {children}
        </select>

        {hasError && props.name && (
          <ErrorMessage
            errors={errors}
            name={props.name}
            render={({ message }) => {
              return (
                <div className="pt-1 pl-2 text-error text-xsmall-regular">
                  <span>{message}</span>
                </div>
              )
            }}
          />
        )}
      </div>
    )
  }
)

CartItemSelect.displayName = "CartItemSelect"

export default CartItemSelect
