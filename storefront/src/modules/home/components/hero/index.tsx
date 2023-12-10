import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b bg-base-100 relative">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-neutral-content font-normal"
          >
            Ecommerce Starter Template
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-base-content font-normal"
          >
            Powered by Medusa and Next.js
          </Heading>
        </span>

        <Button variant="secondary">click me</Button>
      </div>
    </div>
  )
}

export default Hero
