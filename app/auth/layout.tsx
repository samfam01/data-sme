import Logo from "@/components/logo";
import { AuthOptimizationWrapper } from "@/components/auth-optimization-wrapper";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <AuthOptimizationWrapper>
        <div className="min-h-screen flex flex-col">
          <header className="p-4 border-b">
            <Logo showName showLogo={false} />
          </header>
          <div className="flex-1 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md space-y-8">{children}</div>
          </div>
        </div>
      </AuthOptimizationWrapper>
    </Suspense>
  );
};

export default Layout;
