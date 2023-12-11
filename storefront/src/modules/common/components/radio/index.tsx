const Radio = ({ checked }: { checked: boolean }) => {
  return (
    <>
      <button
        role="radio"
        aria-checked="true"
        data-state={checked ? "checked" : "unchecked"}
        className="radio radio-accent group relative flex h-5 w-5 items-center justify-center outline-none"
      >
        <div className="shadow-borders-base group-hover:shadow-borders-strong-with-shadow bg-base-100 group-data-[state=checked]:bg-accent group-data-[state=checked]:shadow-borders-interactive group-focus:!shadow-borders-interactive-with-focus group-disabled:!bg-ui-bg-disabled group-disabled:!shadow-borders-base flex h-[14px] w-[14px] items-center justify-center rounded-full transition-all">
          {checked && (
            <span
              data-state={checked ? "checked" : "unchecked"}
              className="group flex items-center justify-center"
            >
              <div className="bg-base-100 rounded-full group-disabled:shadow-none h-1.5 w-1.5"></div>
            </span>
          )}
        </div>
      </button>
      {/* <div
        className={clsx(
          "h-3 w-3 rounded-full border border-gray-200 flex items-center justify-center",
          {
            "border-gray-900": checked,
          }
        )}
      >
        {checked && <div className="w-2 h-2 rounded-full bg-gray-900" />}
      </div> */}
    </>
  )
}

export default Radio
