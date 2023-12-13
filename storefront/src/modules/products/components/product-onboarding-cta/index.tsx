const ProductOnboardingCta = () => {
  return (
    <div className="max-w-4xl h-full bg-ui-bg-subtle w-full p-8">
      <div className="flex flex-col gap-y-4 center">
        <p className="text-base-content text-xl">
          Your demo product was successfully created! 🎉
        </p>
        <p className="text-base-content text-opacity-60 text-small-regular">
          You can now continue setting up your store in the admin.
        </p>
        <a href="http://localhost:7001/a/orders?onboarding_step=create_order_nextjs">
          <button className="btn w-full">Continue setup in admin</button>
        </a>
      </div>
    </div>
  )
}

export default ProductOnboardingCta
