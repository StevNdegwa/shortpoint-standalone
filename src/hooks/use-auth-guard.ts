import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface UseAuthGuardOptions {
  redirectTo?: string;
  requireAuth?: boolean;
}

export function useAuthGuard({ 
  redirectTo = "/sign-in", 
  requireAuth = true 
}: UseAuthGuardOptions = {}) {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    if (requireAuth && !isSignedIn) {
      router.push(redirectTo);
    } else if (!requireAuth && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, requireAuth, redirectTo, router]);

  return {
    isLoaded,
    isSignedIn,
    isLoading: !isLoaded
  };
}
