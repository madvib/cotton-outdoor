import Link from "next/link"
import React from "react"

type LogoProps = {
  linkHome?: boolean
}

const Logo: React.FC<LogoProps> = ({ linkHome: linkToHome = true }) => {
  const txt = (
    <span className="font-logo text-2xl sm:text-4xl text-center text-primary uppercase">
      Open Outdoors
    </span>
  )
  return linkToHome ? <Link href="/">{txt}</Link> : txt
}

export default Logo
