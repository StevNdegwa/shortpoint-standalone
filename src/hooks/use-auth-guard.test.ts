import { renderHook } from '@testing-library/react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useAuthGuard } from './use-auth-guard';

jest.mock('@clerk/nextjs', () => ({
  useAuth: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

describe('useAuthGuard', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseRouter.mockReturnValue({
      push: mockPush,
    } as any);
  });

  it('should redirect to sign-in when user is not authenticated and auth is required', () => {
    mockUseAuth.mockReturnValue({
      isLoaded: true,
      isSignedIn: false,
    } as any);

    renderHook(() => useAuthGuard({ requireAuth: true }));

    expect(mockPush).toHaveBeenCalledWith('/sign-in');
  });

  it('should redirect to dashboard when user is authenticated and auth is not required', () => {
    mockUseAuth.mockReturnValue({
      isLoaded: true,
      isSignedIn: true,
    } as any);

    renderHook(() => useAuthGuard({ requireAuth: false }));

    expect(mockPush).toHaveBeenCalledWith('/dashboard');
  });

  it('should not redirect when auth is not loaded', () => {
    mockUseAuth.mockReturnValue({
      isLoaded: false,
      isSignedIn: false,
    } as any);

    renderHook(() => useAuthGuard());

    expect(mockPush).not.toHaveBeenCalled();
  });

  it('should use custom redirect URL when provided', () => {
    mockUseAuth.mockReturnValue({
      isLoaded: true,
      isSignedIn: false,
    } as any);

    renderHook(() => useAuthGuard({ redirectTo: '/custom-signin' }));

    expect(mockPush).toHaveBeenCalledWith('/custom-signin');
  });

  it('should return correct state values', () => {
    mockUseAuth.mockReturnValue({
      isLoaded: true,
      isSignedIn: true,
    } as any);

    const { result } = renderHook(() => useAuthGuard());

    expect(result.current).toEqual({
      isLoaded: true,
      isSignedIn: true,
      isLoading: false,
    });
  });
});