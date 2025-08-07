import { render, screen } from "@testing-library/react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ProtectedRoute } from "./protected-route";

// Mock Clerk
jest.mock("@clerk/nextjs", () => ({
  useAuth: jest.fn(),
}));

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

describe("ProtectedRoute", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      push: mockPush,
    } as any);
    mockPush.mockClear();
  });

  it("shows loading state when auth is not loaded", () => {
    mockUseAuth.mockReturnValue({
      isLoaded: false,
      isSignedIn: false,
    } as any);

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it("redirects to sign-in when user is not authenticated", () => {
    mockUseAuth.mockReturnValue({
      isLoaded: true,
      isSignedIn: false,
    } as any);

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(mockPush).toHaveBeenCalledWith('/sign-in');
  });

  it("renders children when user is authenticated", () => {
    mockUseAuth.mockReturnValue({
      isLoaded: true,
      isSignedIn: true,
    } as any);

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByText('Protected Content')).toBeInTheDocument();
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("renders custom fallback when provided", () => {
    mockUseAuth.mockReturnValue({
      isLoaded: true,
      isSignedIn: false,
    } as any);

    render(
      <ProtectedRoute fallbackUrl="/custom-signin">
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(mockPush).toHaveBeenCalledWith('/custom-signin');
  });
});