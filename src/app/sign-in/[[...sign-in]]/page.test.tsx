import { render, screen } from '@testing-library/react';
import SignInPage from './page';

// Mock Clerk components
jest.mock('@clerk/nextjs', () => ({
  SignIn: ({ appearance, redirectUrl }: any) => (
    <div data-testid="clerk-signin" data-redirect-url={redirectUrl}>
      Mock SignIn Component
    </div>
  ),
}));

// Mock Next.js components
jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

describe('SignInPage', () => {
  it('renders the sign-in page with correct title', () => {
    render(<SignInPage />);
    
    expect(screen.getByText('Welcome back')).toBeInTheDocument();
    expect(screen.getByText('Sign in to your ShortPoint account')).toBeInTheDocument();
  });

  it('renders the Clerk SignIn component', () => {
    render(<SignInPage />);
    
    const signInComponent = screen.getByTestId('clerk-signin');
    expect(signInComponent).toBeInTheDocument();
    expect(signInComponent).toHaveAttribute('data-redirect-url', '/dashboard');
  });

  it('renders navigation links', () => {
    render(<SignInPage />);
    
    expect(screen.getByText('ShortPoint')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument(); // Link at bottom
  });

  it('renders the logo', () => {
    render(<SignInPage />);
    
    const logo = screen.getByAltText('ShortPoint');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/shortpoint-logo.svg');
  });

  it('has correct styling classes', () => {
    render(<SignInPage />);
    
    const mainContainer = screen.getByText('Welcome back').closest('.min-h-screen');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveClass('min-h-screen', 'bg-gradient-to-br', 'from-blue-50', 'to-gray-50');
  });
});
