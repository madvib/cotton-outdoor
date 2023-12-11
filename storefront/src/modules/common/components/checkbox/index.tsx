import React from "react"
import { Checkbox, Label } from "@medusajs/ui"

type CheckboxProps = {
  checked?: boolean
  onChange?: () => void
  label: string
}

const CheckboxWithLabel: React.FC<CheckboxProps> = ({
  checked = true,
  onChange,
  label,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="form-control">
        <label className="cursor-pointer label">
          <input
            className="checkbox checkbox-sm checkbox-accent mr-2"
            id="checkbox"
            role="checkbox"
            type="checkbox"
            checked={checked}
            aria-checked={checked}
            onChange={onChange}
          />
          <span className="label-text">{label}</span>
        </label>
      </div>
    </div>
  )
}

export default CheckboxWithLabel
