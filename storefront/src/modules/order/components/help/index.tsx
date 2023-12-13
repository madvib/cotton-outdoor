import Link from "next/link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6">
      <h3 className="text-base-content text-opacity-60">Need help?</h3>
      <div className="text-base-content my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-accent">
              Returns & Exchanges
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
