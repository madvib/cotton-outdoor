import Link from "next/link"
import { ArrowUpRightMini } from "@medusajs/icons"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <Link
      className="flex gap-x-1 items-center group"
      href={href}
      onClick={onClick}
      {...props}
    >
      <p className="text-accent">{children}</p>
      <ArrowUpRightMini
        className="group-hover:rotate-45 ease-in-out duration-150"
        color="oklch(var(--a))"
      />
    </Link>
  )
}

export default InteractiveLink
