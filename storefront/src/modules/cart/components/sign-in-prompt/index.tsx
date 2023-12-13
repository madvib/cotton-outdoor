import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-base-100 flex items-center justify-between">
      <div>
        <h2 className="txt-xlarge text-base-content">
          Already have an account?
        </h2>
        <p className="txt-medium text-base-content text-opacity-60">
          Sign in for a better experience.
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <button className="btn btn-secondary h-10">Sign in</button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
