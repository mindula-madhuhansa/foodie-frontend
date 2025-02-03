import Link from "next/link";
import Image from "next/image";

import SignInForm from "@/components/sign-in-form";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row overflow-hidden">
      <div className="hidden lg:block lg:w-1/2">
        <Image
          src="/assets/images/auth_banner.jpg"
          alt="Login background"
          width={1920}
          height={1080}
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <h1 className="mb-8 text-3xl font-bold">Sign In</h1>
          <SignInForm />
          <p className="mt-4 text-center text-sm text-muted-foreground flex w-full justify-end">
            Don&apos;t have an account?
            <Link href="/sign-up" className="ml-2 text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
