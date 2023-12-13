import { EllipseMiniSolid } from "@medusajs/icons"
import { ChangeEvent } from "react"
import clsx from "clsx"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
}: FilterRadioGroupProps) => {
  return (
    <div className="flex gap-x-3 flex-col gap-y-3">
      <p className="txt-compact-small-plus">{title}</p>
      <div className="join join-vertical">
        {items?.map((i) => (
          <div
            key={i.value}
            className={clsx("join-item flex gap-x-2 items-center", {
              // "ml-[-1.75rem]": i.value === value,
            })}
          >
            {i.value === value && <EllipseMiniSolid />}
            <label
              className={clsx(
                "text-base-content text-opacity-60 txt-compact-small-plus hover:cursor-pointer",
                {
                  "text-base-content": i.value === value,
                }
              )}
            >
              {i.label}
              <input
                checked={i.value === value}
                className="radio hidden peer"
                onClick={(e) =>
                  handleChange(
                    e as unknown as ChangeEvent<HTMLButtonElement>,
                    i.value
                  )
                }
                id={i.value}
                value={i.value}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterRadioGroup
