const OnboardingCta = ({ orderId }: { orderId: string }) => {
  const resetOnboarding = () => {
    window.sessionStorage.setItem("onboarding", "false")
  }

  return (
    <div className="max-w-4xl h-full bg-ui-bg-subtle w-full">
      <div className="flex flex-col gap-y-4 center p-4 md:items-center">
        <p className="text-base-content text-xl">
          Your test order was successfully created! 🎉
        </p>
        <p className="text-base-content text-opacity-60 text-small-regular">
          You can now complete setting up your store in the admin.
        </p>
        <a
          href={`http://localhost:7001/a/orders/${orderId}`}
          onClick={resetOnboarding}
        >
          <button className="btn w-full">Complete setup in admin</button>
        </a>
      </div>
    </div>
  )
}

export default OnboardingCta
