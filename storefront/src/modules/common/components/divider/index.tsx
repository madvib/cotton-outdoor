import clsx from "clsx"

const Divider = ({ className }: { className?: string }) => (
  <div className={clsx("h-px w-full border-b border-base-300", className)} />
)

export default Divider
