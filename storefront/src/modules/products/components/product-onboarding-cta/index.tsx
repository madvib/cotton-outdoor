import { Button, Container, Text } from "@medusajs/ui"

const ProductOnboardingCta = () => {
  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full p-8">
      <div className="flex flex-col gap-y-4 center">
        <Text className="text-base-content text-xl">
          Your demo product was successfully created! 🎉
        </Text>
        <Text className="text-base-content text-opacity-60 text-small-regular">
          You can now continue setting up your store in the admin.
        </Text>
        <a href="http://localhost:7001/a/orders?onboarding_step=create_order_nextjs">
          <button className="btn w-full">Continue setup in admin</button>
        </a>
      </div>
    </Container>
  )
}

export default ProductOnboardingCta
