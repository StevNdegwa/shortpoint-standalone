"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface UseAuthRedirectOptions {
  redirectTo?: string;
  requireAuth?: boolean;
}

export function useAuthRedirect({ 
  redirectTo = "/dashboard", 
  requireAuth = false 
}: UseAuthRedirectOptions = {}) {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    if (requireAuth && !isSignedIn) {
      router.push("/sign-in");
    } else if (!requireAuth && isSignedIn) {
      router.push(redirectTo);
    }
  }, [isLoaded, isSignedIn, requireAuth, redirectTo, router]);

  return {
    isLoaded,
    isSignedIn,
    isLoading: !isLoaded,
  };
}

