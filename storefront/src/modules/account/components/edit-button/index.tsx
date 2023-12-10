import React from "react"

const EditButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <div>
      <button
        className="underline text-small-regular text-base-content mt-2"
        {...props}
      >
        Edit
      </button>
    </div>
  )
}

export default EditButton
