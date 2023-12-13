const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <span className={"badge badge-warning" + className}>
      <span className="font-semibold">Attention:</span> For testing purposes
      only.
    </span>
  )
}

export default PaymentTest
