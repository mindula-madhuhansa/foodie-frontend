import Image from "next/image";
import { SignIn } from "@clerk/nextjs";

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
        <SignIn />
      </div>
    </div>
  );
}
